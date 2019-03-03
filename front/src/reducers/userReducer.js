import { SET_USER } from "../actions/types";

const initialState = {
    userName: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userName: action.payload
            }
        default:
            return state;
    }
}