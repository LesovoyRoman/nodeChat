import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Preloader from './../partials/Preloader'

class ChatRoomsPresentation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                {this.props.chatRooms === false && <Preloader/>}
                {this.props.chatRooms !== false && this.props.chatRooms.length === 0 && <p className="pHeader">Rooms not found</p>}
                <ul className="list-rooms">
                    { this.props.chatRooms && this.props.chatRooms.map((chat, index) => (
                        <li key={ chat._id } className="link-chat" >
                            <Link key={ chat._id } to={ '/chat/' + chat._id }>
                                { chat.name }
                            </Link>
                        </li>
                    )) }
                </ul>
            </>
        )
    }
}

export default ChatRoomsPresentation;