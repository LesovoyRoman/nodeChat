import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { getChatRooms, createChatRoom, setNewChat } from "./../../actions/chat";
import { connectSocket } from './../../socketEventsHandler';
import store from './../../store'
import Preloader from './../partials/Preloader'

class ChatRooms extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            errors: {},
            chatRooms: []
        }

        connectSocket(payload => {
            if(payload.type !== 'chat') return;

            /**
             * Dispatch new chat to state
             */
            store.dispatch(setNewChat({chat: payload.chat, chatRooms: this.state.chatRooms}))
        })
    }


    componentDidMount() {
        store.dispatch(getChatRooms);
    }
    
    createChatRoom() {
        let ChatName = prompt('Type room name')
        store.dispatch(createChatRoom({name: ChatName}))
    }

    componentWillReceiveProps(prop){
        if(prop.chatRoomsReceived) {
            this.setState(state => {
                state.chatRooms = prop.chatRoomsReceived.chatRooms
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
                {this.state.chatRooms.length === 0 && <Preloader/>}
                   
                <ul className="list-rooms">
                    { this.state.chatRooms && this.state.chatRooms.map((chat, index) => (
                        <li key={ chat._id } className="link-chat" >
                            <Link key={ chat._id } to={ '/chat/' + chat._id }>
                                { chat.name }
                            </Link>
                        </li>
                    )) }
                </ul>

                <button onClick={this.createChatRoom} className="create-room">Create new</button>
            </>
        )
    }
}


ChatRooms.propTypes = {
    chatRoomsReceived: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    chatRoomsReceived: state.chatRooms,
    errors: state.errors,
})

export default connect(mapStateToProps)(withRouter(ChatRooms));