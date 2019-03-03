const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({

    text: {
        type: String,
        required: true,
        min: 1
    },
    chat_id: {
        type: Schema.ObjectId,
        required: true
    },
    user_name: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const Message = mongoose.model('messages', MessageSchema);

module.exports = Message;