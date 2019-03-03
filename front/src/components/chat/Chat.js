import React, { Component } from 'react'


/**
 * Chat components
 */
import ChatWindow from './partials/ChatWindow'

class Chat extends Component {
    render() {
        return (
            <div id="app">
                <h1>Chat</h1>
                <div className="chatWindow">
                    <ChatWindow/>
                </div>
            </div>
        )
    }
}

export default Chat