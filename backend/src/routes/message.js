const express = require('express');
const router = express.Router();
const socketEmitter = require('../server')

// Model
const Message = require('../models/Message');

// retrieve all questions
router.post('/all', (req, res) => {

    Message.find({}).sort( { date: -1 } ).then(function (messages) {
        res.send({
            messages: messages
        });
    });

});

// add new message
router.post('/create_message', (req, res) => {

    let newMessage = new Message({
        text: req.body.text,
        user_id: req.body.user_id
    });

    newMessage.save()

    socketEmitter.emitMessage(newMessage);

    res.json(newMessage)

});

module.exports = router;