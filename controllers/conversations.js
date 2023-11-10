const Conversation = require('../models/conversation');
const { validationResult } = require('express-validator');

exports.postCrateGroup = (req, res, next) => {
    const groupName = req.body.name;
    const groupUsers = JSON.parse(req.body.groupUsers);
    const image = req.file
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errorMessage: errors.array()[0].msg, oldInput: { groupName: groupName, image: image, groupUsers: groupUsers } });
    }
    const newGroupUsers = groupUsers.map(user => { return { id: user.userId, image: user.image, name: user.name } });
    const conversation = new Conversation({ new: true, name: groupName, image: 'https://live-chat-scql.onrender.com/' + image.path.replace('\\', '/'), secondUserName: groupName, conversationUsers: newGroupUsers });
    conversation.save()
        .then(conversation => {
            res.json(conversation);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.postLeaveGroup = async (req, res, next) => {
    const id = req.body.id;
    const convId = req.body.convId;
    const leaveName = req.body.leaveName;
    const conv = await Conversation.findById(convId);
    if (!conv) {
        const error = new Error('No conversation found');
        error.statusCode = 401;
        throw error;
    }
    else if (conv.conversationUsers.length === 1) {
        await Conversation.findByIdAndDelete({ _id: convId });
        return res.json('Deleted');
    } else {
        conv.conversationUsers = conv.conversationUsers.filter(userInfo => userInfo.id.toString() !== id);
        conv.messages = [...conv.messages, { name: leaveName, message: 'left the chat', time: new Date() }];
        await conv.save();
        return res.json(conv);
    }
}

exports.postMessage = (req, res, next) => {
    const id = req.body.id;
    const personalName = req.body.personalName;
    const userId = req.body.personalId;
    const name = req.body.name;
    const secondUserName = req.body.secondUserName;
    const conversationInfo = req.body.conversationUsers;
    const message = req.body.message;
    const image = req.body.image;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errorMessage: errors.array()[0].msg, oldInput: { message: message } });
    }
    Conversation.findById(id)
        .then(conv => {
            if (conv) {
                conv.new = false;
                conv.messages = [...conv.messages, { name: personalName, image: image, message: message, messageUser: userId, time: new Date() }];
                conv.save()
                    .then(conversation => {
                        res.json(conversation);
                    })
            } else {
                const conversation = new Conversation({ new: true, name: name, secondUserName: secondUserName, messages: [{ name: personalName, image: image, message: message, messageUser: userId, time: new Date() }], conversationUsers: conversationInfo });
                conversation.save()
                    .then(conversation => {
                        res.json(conversation);
                    })
            }
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}