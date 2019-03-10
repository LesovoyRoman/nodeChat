const express = require('express');
const router = express.Router();
const routes = require('./all')
const MESSAGE_RESOLVERS = require('./../resolvers/message');

/**
 * retrieve all messages
 */
router.post(routes.ALL_ROUTES.MESSAGES.GET_MESSAGES, async (req, res) => {

    try {
        /**
         * Find all messages by chat_id
         * @type {Query}
         */
        let messages = await MESSAGE_RESOLVERS.GET_MESSAGES(req.body.chat_id)

        return res.status(200).send(messages);
        
    } catch (err) {
        return res.status(500).send(err)
    }

});

/**
 * add new message
 */
router.post(routes.ALL_ROUTES.MESSAGES.CREATE_MESSAGE, async (req, res) => {

    try {
        let newMessage = await MESSAGE_RESOLVERS.NEW_MESSAGE(req.body);

        return res.status(201).send(newMessage)

    } catch (err) {
        return res.status(500).send(err)
    }
    
});

module.exports = router;