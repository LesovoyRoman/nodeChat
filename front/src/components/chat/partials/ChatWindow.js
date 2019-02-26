import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { getMessages } from "./../../../actions/messages";
import store from './../../../store'
import ChatPanel from './ChatPanel'

class ChatWindow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: {},
            messages: []
        }
    }

    componentDidMount() {
        store.dispatch(getMessages);
    }

    componentWillReceiveProps(prop){
        if(prop.messages_received) {
            this.setState({
                messages: prop.messages_received.messages
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
            <div>
                {this.state.messages.length === 0 && <p>Loading messages...</p>}
                <ul className="list-messages">
                    {
                        this.state.messages && this.state.messages.map(message => (
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

            </div>
        )
    }
}

ChatWindow.propTypes = {
    messages_received: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    messages_received: state.messages
})

export default connect(mapStateToProps)(withRouter(ChatWindow));