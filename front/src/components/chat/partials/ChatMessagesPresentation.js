import React, { Component } from 'react'
import Preloader from './../../partials/Preloader'

class ChatMessagesPresentation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                {this.props.messages === false && <Preloader/>}
                {this.props.messages !== false && this.props.messages.length === 0 && <p className="pHeader">Messages not found</p>}
                <ul className="list-messages">
                    {
                        this.props.messages && this.props.messages.map((message, index) => (
                            <li key={ message._id }>
                                {
                                    typeof message.user_name !== 'undefined' ?
                                        <span className="primary-color">{ message.user_name }</span>
                                        :
                                        <span className="primary-color">Stranger</span>
                                }: { message.text }
                                <span className="message-time">{ new Date(+message.date).toLocaleString() }</span>
                            </li>
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default ChatMessagesPresentation