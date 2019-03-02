import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { getMessages, setNewMessage } from "./../../../actions/messages";
import store from './../../../store'
import ChatPanel from './ChatPanel'
import { connectSocket } from './../../../socketMessages';
import { changeFav, notificationVoice } from "../../../helpers/functions";
import * as APP_CONSTS from '../../../config'
import { documentHidden } from '../../../helpers/events'

class ChatWindow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: {},
            messages: []
        }

        connectSocket(message => {
            /**
             * Dispatch new message to state
             */
            store.dispatch(setNewMessage(message, this.state.messages))

            /**
             * Custom alert (change favicon)
             * (works if you are not on this tab in browser)
             */
            if(documentHidden) {
                changeFav(APP_CONSTS.FAV_NEW_MESSAGE, APP_CONSTS.PNG_TYPE)
                notificationVoice(APP_CONSTS.ALERT_VOICE)
            }
        })
    }

    componentDidMount() {
        store.dispatch(getMessages);
    }

    componentWillReceiveProps(prop){
        if(prop.messages_received) {
            this.setState(state => {
                state.messages = prop.messages_received.messages
            })
        }
        if(prop.errors) {
            this.setState({
                errors: prop.errors
            })
        }
    }

    render() {
        return (
            <>
                {this.state.messages.length === 0 && <p>Loading messages...</p>}
                <ul className="list-messages">
                    {
                        this.state.messages && this.state.messages.map((message, index) => (
                            <li key={ message._id }>
                                {
                                    typeof message.user !== 'undefined' ?
                                        <span className="primary-color">{ message.user }</span>
                                        :
                                        <span className="primary-color">Stranger</span>
                                }: { message.text }
                                <span className="message-time">{ message.date }</span>
                            </li>
                        ))
                    }
                </ul>

                <ChatPanel />

            </>
        )
    }
}

ChatWindow.propTypes = {
    messages_received: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    messages_received: state.messages,
    errors: state.errors,
})

export default connect(mapStateToProps)(withRouter(ChatWindow));