const express = require('express');
const socketEmitter = require('../server')
const CONFIG = require('./../config')

/**
 * Model
 */
const Chat = require('../models/Chat');

/**
 * all chats
 */
const GET_CHATS = async () => {

    try {

        let chats = await Chat
            .find({})
            .sort({
                date: -1
            })

        return {
            chats: chats
        };

    } catch (err) {

        return err
    }

};

/**
 * add new chat
 */
const NEW_CHAT = async (name) => {

    try {

        let newChat = await new Chat({
            name: name.trim().length > 0 ?
                name.trim()
                :
            Math.random().toString(36).substr(2, 10) + Math.random().toString(36).substr(2, 10),
        });

        newChat.save()

        socketEmitter.emitEvent({chat: newChat, event: CONFIG.NEW_CHAT_ROOM_EVENT});

        return newChat

    } catch (err) {
        return err
    }

};

/**
 * Check if exists chat
 */
const CHECK_CHAT = async (payload) => {

    try {
        let exists

        /**
         * Find by id or name
         */
        payload.chat_id ?
            exists = await Chat.findOne({_id: payload.chat_id})
            :
            exists = await Chat.findOne({name: payload.name})

        return {exists: exists}

    } catch (err) {
        return err
    }

};

module.exports = {
    CHECK_CHAT: CHECK_CHAT,
    NEW_CHAT: NEW_CHAT,
    GET_CHATS: GET_CHATS
}