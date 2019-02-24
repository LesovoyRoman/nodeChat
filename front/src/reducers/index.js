import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import messagesReducer from './messagesReducer'

export default combineReducers({
    errors: errorReducer,
    messages: messagesReducer
});