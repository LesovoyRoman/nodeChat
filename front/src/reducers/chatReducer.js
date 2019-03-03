import {SET_CHAT} from "../actions/types";

const initialState = {
    chatId: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CHAT:
            return {
                ...state,
                chatId: action.payload
            }
        default:
            return state;
    }
}