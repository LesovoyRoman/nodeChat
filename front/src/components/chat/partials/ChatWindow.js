import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { getMessages } from "./../../../actions/messages";
import { setChatId } from './../../../actions/chat'
import store from './../../../store'
import ChatPanel from './ChatPanel'
import ChatMessagesPresentation from './ChatMessagesPresentation'

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
                <ChatMessagesPresentation messages={this.state.messages} />
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