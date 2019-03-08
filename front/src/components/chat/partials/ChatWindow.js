import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { getMessages } from "./../../../actions/messages";
import { setChatId } from './../../../actions/chat'
import store from './../../../store'
import ChatPanel from './ChatPanel'
import Preloader from './../../partials/Preloader'

class ChatWindow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: {},
            chatId: props.match.params.id,
            userName: '',
            messages: false
        };
        
        store.dispatch(setChatId(props.match.params.id));
        store.dispatch(getMessages(props.match.params.id));
    }

    componentWillReceiveProps(prop){
        /**
         * Messages received
         */
        if(prop.messagesReceived) {
            this.setState({
                messages: prop.messagesReceived.messages
            })
        }
        if(prop.userNameReceived) {
            this.setState({
                userName: prop.userNameReceived.userName
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
                {this.state.messages === false && <Preloader/>}
                {this.state.messages !== false && this.state.messages.length === 0 && <p className="pHeader">Messages not found</p>}
                <ul className="list-messages">
                    {
                        this.state.messages && this.state.messages.map((message, index) => (
                            <li key={ message._id }>
                                {
                                    typeof message.user_name !== 'undefined' ?
                                        <span className="primary-color">{ message.user_name }</span>
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
    messagesReceived: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    messagesReceived: state.messages,
    userNameReceived: state.userName,
    chatIdReceived: state.chatId,
    errors: state.errors
})

export default connect(mapStateToProps)(withRouter(ChatWindow));