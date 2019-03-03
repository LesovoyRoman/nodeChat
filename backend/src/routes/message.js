const express = require('express');
const router = express.Router();
const socketEmitter = require('../server')
const routes = require('./all')
const mongoose = require('mongoose');

/**
 * Model
 */
const Message = require('../models/Message');

/**
 * retrieve all messages
 */
router.post(routes.ALL_ROUTES.MESSAGES.GET_MESSAGES, async (req, res) => {

    try {
        /**
         * Find all messages by chat_id
         * @type {Query}
         */
        let messages = await Message
            .find({
                chat_id: req.body.chat_id
            })
            .sort({ 
                date: -1 
            })

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
router.post(routes.ALL_ROUTES.MESSAGES.CREATE_MESSAGE, async (req, res) => {

    try {
        let newMessage = await new Message({
            text: req.body.text,
            user_name: req.body.user_name,
            chat_id: req.body.chat_id
        });

        newMessage.save()
        
        socketEmitter.emitEvent({message: newMessage, type: 'message'});

        return res.status(201).send(newMessage)

    } catch (err) {
        return res.status(500).send(err)
    }
    
});

module.exports = router;