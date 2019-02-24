const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({

    text: {
        type: String,
        required: true
    },
    // user_id: {
    //     type: Schema.ObjectId,
    //     required: true
    // },
    date: {
        type: Date,
        default: Date.now
    }

});

const Message = mongoose.model('messages', MessageSchema);

module.exports = Message;