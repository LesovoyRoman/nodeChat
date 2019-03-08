import { SET_USER } from "./types";
import { createAction } from 'redux-actions'

/**
 * Set user name in store
 */
export const setUserName = createAction(SET_USER)