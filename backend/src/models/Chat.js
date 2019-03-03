const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const Chat = mongoose.model('chats', ChatSchema);

module.exports = Chat;