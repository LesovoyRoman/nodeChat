import { SET_USER } from "./types";

export const setUserName = userName => {
    return {
        type: SET_USER,
        payload: userName
    }
}