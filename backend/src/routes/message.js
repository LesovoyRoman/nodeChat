const express = require('express');
const router = express.Router();

// Model
const Message = require('../models/Message');

// retrieve all questions
router.post('/all', (req, res) => {

    Message.find({}).then(function (messages) {
        res.send(messages);
    });

});

// add new message
router.post('/create_message', (req, res) => {

    let newMessage = new Message({
        text: req.body.text,
        //user_id: req.body.user_id
    });

    newMessage.save()

    res.json(newMessage)

});

module.exports = router;