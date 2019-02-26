import axios from 'axios';
import { GET_ERRORS, SET_MESSAGES } from "./types";
import { API_REQ } from './../config'

export const createMessage = (message, user_id) => dispatch => {
    return axios.post(API_REQ + '/api/messages/create_message', {
        text: message,
        user_id: user_id || 0
    })
        .then(res => {
            return res
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err
            });
        });
}

export const getMessages = dispatch => {
    return axios.post(API_REQ + '/api/messages/all')
        .then(res => {
            return dispatch(
                setMessages(res.data.messages)
            )
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const setMessages = messages => {
    return {
        type: SET_MESSAGES,
        payload: messages
    }
}