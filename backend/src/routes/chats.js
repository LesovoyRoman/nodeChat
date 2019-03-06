const express = require('express');
const router = express.Router();
const socketEmitter = require('../server')
const routes = require('./all')
const CONFIG = require('./../config')


/**
 * Model
 */
const Chat = require('../models/Chat');

/**
 * all chats
 */
router.get(routes.ALL_ROUTES.CHATS.GET_CHATS, async (req, res) => {

    try {

        let chats = await Chat
            .find({})
            .sort({
                date: -1
            })

        return res.status(200).send({
            chats: chats
        });

    } catch (err) {

        return res.status(500).send(err)
    }

});

/**
 * add new chat
 */
router.post(routes.ALL_ROUTES.CHATS.CREATE_CHAT, async (req, res) => {

    try {

        let newChat = await new Chat({
            name: req.body.name.trim().length > 0 ? 
                req.body.name.trim()
                :
                Math.random().toString(36).substr(2, 10) + Math.random().toString(36).substr(2, 10),
        });

        newChat.save()
        
        socketEmitter.emitEvent({chat: newChat, event: CONFIG.NEW_CHAT_ROOM_EVENT});

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
        let exists

        /**
         * Find by id or name
         */
        req.body.chat_id ?
            exists = await Chat.findOne({_id: req.body.chat_id})
            :
            exists = await Chat.findOne({name: req.body.name})

        return res.status(200).send({exists: exists})
        
    } catch (err) {
        return res.status(500).send(err)
    }

});

module.exports = router;