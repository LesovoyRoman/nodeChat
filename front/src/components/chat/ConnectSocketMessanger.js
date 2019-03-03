import React, { Component } from 'react'
import { changeFav, notificationVoice } from "../../helpers/functions";
import { setNewMessage } from './../../actions/messages'
import { connectSocket } from './../../socketEventsHandler';
import store from './../../store'
import { documentHidden } from '../../helpers/events'
import * as APP_CONSTS from '../../config'

class ConnectSocketMessanger extends Component {
    constructor(props) {
        super(props)

        connectSocket(payload => {
            if(payload.type !== 'message') return;

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
        })
    }
    
    render() {
        return null
    }
}

export default ConnectSocketMessanger