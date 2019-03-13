import axios from 'axios';
import { GET_ERRORS, SET_CHAT, SET_CHAT_ROOMS } from "./types";
import { API_REQ, GRAPH_QL } from './../config'
import { API_ROUTES } from './../apiRoutes'
import { createAction } from 'redux-actions'
import { GRAPH_QL_QUERIES } from './graphqlQueries'

export const getChatRooms = async dispatch => {
    try {
        let res = !GRAPH_QL ?
            await axios.post(API_REQ + API_ROUTES.CHATS.GET_CHATS)
            :
            (await axios.post(API_REQ, {query: GRAPH_QL_QUERIES.GET_CHATS()})).data;

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
        let res = !GRAPH_QL ?
            await axios.post(API_REQ + API_ROUTES.CHATS.CREATE_CHAT, {
                name: payload.name
            })
            :
            (await axios.post(API_REQ, {
                query: GRAPH_QL_QUERIES.CREATE_CHAT(payload.name)
            })).data;
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
        let res = !GRAPH_QL ? 
            (await axios.post(API_REQ + API_ROUTES.CHATS.CHAT_EXISTS, {
                chat_id: payload
            })).data
            :
            (await axios.post(API_REQ, {
                query: GRAPH_QL_QUERIES.CHECK_CHAT(payload)
            })).data.data.checkChat;

        return Promise.resolve(res)
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