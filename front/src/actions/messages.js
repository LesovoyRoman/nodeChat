import axios from 'axios';
import { GET_ERRORS, SET_MESSAGES } from "./types";
import { API_REQ, GRAPH_QL } from './../config'
import { API_ROUTES } from './../apiRoutes'
import { createAction } from 'redux-actions'
import { GRAPH_QL_QUERIES } from './graphqlQueries'


/**
 * Create new message and send to api
 * @param payload
 */
export const createMessage = payload => async dispatch =>  {
    try {
        let res = !GRAPH_QL ?
            await axios.post(API_REQ + API_ROUTES.MESSAGES.CREATE_MESSAGE, {
                text: payload.message,
                chat_id: payload.chatId,
                user_name: payload.userName || 'Stranger'
            })
            :
            (await axios.post(API_REQ, {
                query: GRAPH_QL_QUERIES.CREATE_MESSAGE(payload)
            })).data;
        
        return Promise.resolve(res)
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    }
}

/**
 * Add to messages the new message
 * @param payload
 */
export const setNewMessage = payload => dispatch => {
    try {
        payload.messages.unshift(payload.message)
        dispatch(
            setMessages(payload.messages)
        )
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
}

/**
 * Get all messages from api
 * @param payload (chat ID)
 * @returns {Promise|Promise.<T>}
 */
export const getMessages = payload => async dispatch => {
    try {
        let res = !GRAPH_QL ?
            await axios.post(API_REQ + API_ROUTES.MESSAGES.GET_MESSAGES, {
                chat_id: payload
            })
            :
            (await axios.post(API_REQ, {
                query: GRAPH_QL_QUERIES.GET_MESSAGES(payload)
            })).data;

        dispatch(
            setMessages(res.data.messages)
        )
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    }
}

/**
 * Set messages in store
 * @param messages
 * @returns {{type, payload: *}}
 */
export const setMessages = createAction(SET_MESSAGES)