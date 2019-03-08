import axios from 'axios';
import { GET_ERRORS, SET_CHAT, SET_CHAT_ROOMS } from "./types";
import { API_REQ } from './../config'
import { API_ROUTES } from './../apiRoutes'
import { createAction } from 'redux-actions'

export const getChatRooms = async dispatch => {
    try {
        let res = await axios.get(API_REQ + API_ROUTES.CHATS.GET_CHATS)
        dispatch(setChatRooms(res.data.chats))
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
}

/**
 * Add to messages the new message
 * @param payload
 */
export const setNewChat = payload => dispatch => {
    try {
        payload.chatRooms.unshift(payload.chat)
        dispatch(
            setChatRooms(payload.chatRooms)
        )
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
}

/**
 * Create chat room
 * @param payload
 */
export const createChatRoom = payload => async dispatch => {
    try {
        let res = await axios.post(API_REQ + API_ROUTES.CHATS.CREATE_CHAT, {
            name: payload.name
        })
        return Promise.resolve(res)
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
        return Promise.reject(err)
    }
}

/**
 * Set active chat
 * @param chatId
 */
export const setChatId = chatId => async dispatch => {
    try {
        let exists = await dispatch(checkChatById(chatId))
        exists ? 
            dispatch(setChat(chatId))
            :
            dispatch({
                type: GET_ERRORS,
                payload: 'Chat not found'
            })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
}

/**
 * Check if chat with this id exists
 * @param payload
 */
export const checkChatById = payload => async dispatch => {
    try {
        let res = await axios.post(API_REQ + API_ROUTES.CHATS.CHAT_EXISTS, {
            chat_id: payload
        })
        return Promise.resolve(res.data.exists)
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
}

/**
 * Set chat
 * @param chatId
 * @returns {{type, payload: *}}
 */
export const setChat = createAction(SET_CHAT);

/**
 * Set chat rooms
 * @param chatRooms
 * @returns {{type, payload: *}}
 */
export const setChatRooms = createAction(SET_CHAT_ROOMS);