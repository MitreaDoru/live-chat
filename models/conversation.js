const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false,
        },
        messages: [{
            name: { type: String, required: false },
            message: { type: String, required: false },
            image: { type: String, required: false },
            messageUser: { type: Schema.Types.ObjectId, ref: "User", requered: false },
            leave: { type: String, ref: 'User', required: false },
            time: { type: Date, required: false }
        }],
        conversationUsers: [{
            id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
            image: { type: String, required: true },
            name: { type: String, ref: "User", required: true }
        }],
        secondUserName: { type: String, required: true },
        new: {
            type: Boolean,
            required: true,
        },


    },
    { timestamps: true }
);

module.exports = mongoose.model('Conversation', conversationSchema);