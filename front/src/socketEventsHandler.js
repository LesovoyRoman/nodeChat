import { documentHidden } from './helpers/events'
import * as APP_CONSTS from './config'
import { changeFav, notificationVoice } from "./helpers/functions";
import { setNewMessage } from './actions/messages'
import { setNewChat } from "./actions/chat";
import store from './store'

import openSocket from 'socket.io-client';
import { ENDPOINT, NEW_CHAT_ROOM_EVENT, NEW_MESSAGE_EVENT } from './config'
const socket = openSocket(ENDPOINT);

/**
 * If data is object (can be empty)
 * @param data
 */
let checkObject = data => typeof data === 'object'

/**
 * Socket event handlers
 */
class SocketListeners {
    static init = () => {

        /**
         * Emitted new chat room
         */
        socket.on(NEW_CHAT_ROOM_EVENT, (payload) => {
            if(checkObject(payload))
                /**
                 * Dispatch new chat to state
                 */
                store.dispatch(setNewChat({
                    chat: payload.chat,
                    chatRooms: store.getState().chatRooms.chatRooms
                }))
        });

        /**
         * Emitted new message
         */
        socket.on(NEW_MESSAGE_EVENT, (payload) => {
            if(checkObject(payload)) {
                /**
                 * Dispatch new message to state
                 */
                store.dispatch(
                    setNewMessage({
                        message: payload.message,
                        messages: store.getState().messages.messages
                    })
                )

                /**
                 * Custom alert (change favicon & voice alert)
                 * (works if you are not on this tab in browser)
                 */
                if(documentHidden) {
                    changeFav(APP_CONSTS.FAV_NEW_MESSAGE, APP_CONSTS.PNG_TYPE)
                    notificationVoice(APP_CONSTS.ALERT_VOICE)
                }
            }
        })
    }
}

export default SocketListeners