import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { getChatRooms, createChatRoom } from "./../../actions/chat";
import store from './../../store'
import ChatRoomsPresentation from './ChatRoomsPresentation'

class ChatRooms extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            errors: {},
            chatRooms: false
        }
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
                <ChatRoomsPresentation chatRooms={this.state.chatRooms} />

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