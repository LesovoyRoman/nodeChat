import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import messagesReducer from './messagesReducer'
import userReducer from './userReducer'
import chatReducer from './chatReducer'
import chatRoomsReducer from './chatRoomsReducer'

export default combineReducers({
    userName: userReducer,
    chatId: chatReducer,
    errors: errorReducer,
    chatRooms: chatRoomsReducer,
    messages: messagesReducer
});