import axios from 'axios';
import { GET_ERRORS, SET_MESSAGES } from "./types";
import { API_REQ } from './../config'

/**
 * Create new message and send to api
 * @param message
 * @param user_id
 */
export const createMessage = (message, user_id) => async (dispatch) =>  {
    try {
        let res = await axios.post(API_REQ + '/api/messages/create_message', {
            text: message,
            user_id: user_id || 0
        });
        return Promise.resolve(res)
    } catch (err) {
        console.error('createMessage', err)
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
        return Promise.reject(err)
    }
}

/**
 * Add to messages the new message
 * @param message
 * @param messages
 */
export const setNewMessage = (message, messages) => dispatch => {
    try {
        messages.unshift(message)
        return dispatch(
            setMessages(messages)
        )
        
    } catch (err) {
        return dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
}

/**
 * Get all messages from api
 * @param dispatch
 * @returns {Promise|Promise.<T>}
 */
export const getMessages = async (dispatch) => {
    try {
        let res = await axios.post(API_REQ + '/api/messages/all')
        return dispatch(
            setMessages(res.data.messages)
        )
    } catch (err) {
        console.error('getMessages', err)
        return dispatch({
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
export const setMessages = messages => {
    return {
        type: SET_MESSAGES,
        payload: messages
    }
}