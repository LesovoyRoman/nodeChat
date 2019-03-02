const express = require('express');
const router = express.Router();
const socketEmitter = require('../server')

/**
 * Model
 */
const Message = require('../models/Message');

/**
 * retrieve all questions
 */
router.post('/all', async (req, res) => {

    try {
        
        let messages = await Message.find({}).sort( { date: -1 } )

        return res.status(200).send({
            messages: messages
        });
        
    } catch (err) {
        return res.status(500).send(err)
    }

});

/**
 * add new message
 */
router.post('/create_message', async (req, res) => {

    try {

        let newMessage = await new Message({
            text: req.body.text,
            user_id: req.body.user_id
        });

        newMessage.save()

        socketEmitter.emitMessage(newMessage);

        return res.status(201).send(newMessage)

    } catch (err) {
        return res.status(500).send(err)
    }


});

module.exports = router;