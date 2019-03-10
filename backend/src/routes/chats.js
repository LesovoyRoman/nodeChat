const express = require('express');
const router = express.Router();
const routes = require('./all')
const CHAT_RESOLVERS = require('./../resolvers/chat');

/**
 * all chats
 */
router.get(routes.ALL_ROUTES.CHATS.GET_CHATS, async (req, res) => {

    try {

        let chats = await CHAT_RESOLVERS.GET_CHATS();

        return res.status(200).send(chats);

    } catch (err) {

        return res.status(500).send(err)
    }

});

/**
 * add new chat
 */
router.post(routes.ALL_ROUTES.CHATS.CREATE_CHAT, async (req, res) => {

    try {

        let newChat = await CHAT_RESOLVERS.NEW_CHAT(req.body.name)

        return res.status(201).send(newChat)

    } catch (err) {
        return res.status(500).send(err)
    }

});

/**
 * Check if exists chat
 */
router.post(routes.ALL_ROUTES.CHATS.CHAT_EXISTS, async (req, res) => {

    try {
        let exists = await CHAT_RESOLVERS.CHECK_CHAT(req.body)

        return res.status(200).send(exists)
        
    } catch (err) {
        return res.status(500).send(err)
    }

});

module.exports = router;