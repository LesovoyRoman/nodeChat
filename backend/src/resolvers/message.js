const express = require('express');
const socketEmitter = require('../server')
const CONFIG = require('./../config')

/**
 * Model
 */
const Message = require('../models/Message');

/**
 * retrieve all messages
 */
const GET_MESSAGES = async (payload) => {

    try {
        /**
         * Find all messages by chat_id
         * @type {Query}
         */
        let messages = await Message
            .find({
                chat_id: payload.chat_id
            })
            .sort({
                date: -1
            })

        return {
            messages: messages
        };

    } catch (err) {
        return err
    }

};

/**
 * add new message
 */
const NEW_MESSAGE = async (payload) => {

    try {
        let newMessage = await new Message({
            text: payload.text,
            user_name: payload.user_name,
            chat_id: payload.chat_id
        });

        newMessage.save();

        socketEmitter.emitEvent({message: newMessage, event: CONFIG.NEW_MESSAGE_EVENT});

        return newMessage

    } catch (err) {
        return err
    }

};

module.exports = {
    NEW_MESSAGE: NEW_MESSAGE,
    GET_MESSAGES: GET_MESSAGES
}