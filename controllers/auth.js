const User = require('../models/user')
const Conversation = require('../models/conversation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')
require('dotenv').config();
exports.postSignup = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const image = req.file
    const errors = validationResult(req);
    if (!errors.isEmpty() || !image) {
        return res.json({ errorMessage: errors.array()[0].msg, oldInput: { name: name, image: image, email: email, password: password } });
    }
    bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new User({ name: name, image: 'https://live-chat-scql.onrender.com/' + image.path.replace('\\', '/'), email: email, password: hashedPassword });

            return user.save();
        })
        .then(result => {
            res.json({ message: 'Signup done' })
        })
        .catch(err => {
            const error = new Error('Something went wrong with creating the account');
            error.httpStatusCode = 500;
            return next(error);
        })
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const SECRET = process.env.SECRET;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errorMessage: errors.array()[0].msg, oldInput: { email: email, password: password } });
    }
    let loadedUser;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error('A user with this email could not be found.');
                error.statusCode = 401;
                throw error;
            }
            loadedUser = user;
            personalData = user;
            req.user = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password!');
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign(
                {
                    email: loadedUser.email,
                    userId: loadedUser._id.toString()
                },
                SECRET,
                { expiresIn: '1h' }
            );

            res.status(200).json({ token: token, userId: loadedUser._id.toString(), image: loadedUser.image });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
},
    exports.getFile = (req, res, next) => {
        res.download('../server/images/' + req.params.path)
    }
exports.postChangeImage = (req, res, next) => {
    const image = req.file;
    const id = req.body.id
    if (!image) {
        return res.json({ errorMessage: 'Try a .png,.jpg,.jpeg file' })
    } else {
        User.findOne({ _id: id })
            .then(user => {
                user.image = 'https://live-chat-scql.onrender.com/' + image.path.replace('\\', '/')
                user.save()
                return user.image
            })
            .then(result => {
                Conversation.find({ "conversationUsers.id": { "$in": id } })
                    .then(conversations => {
                        conversations.map(conversation => {
                            conversation.conversationUsers.filter(user => user.id.toString() === id)[0].image = 'https://live-chat-scql.onrender.com/' + image.path.replace('\\', '/')
                            conversation.messages.filter(message => message.messageUser.toString() === id).map(message => {
                                message.image = 'https://live-chat-scql.onrender.com/' + image.path.replace('\\', '/')
                            })
                            conversation.save()
                        })
                        return conversations
                    })
                    .then(conversations => {
                        return res.json({ conversations: conversations, image: 'https://live-chat-scql.onrender.com/' + image.path.replace('\\', '/') })
                    })
            })
            .catch(err => {
                if (!err.statusCode) {
                    err.statusCode = 500;
                }
                next(err);
            });
    }



}