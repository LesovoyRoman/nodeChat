import {SET_CHAT_ROOMS} from "../actions/types";

const initialState = {
    chatRooms: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CHAT_ROOMS:
            return {
                ...state,
                chatRooms: action.payload
            }
        default:
            return state;
    }
}