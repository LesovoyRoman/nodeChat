import React, { Component } from 'react'
import { createMessage } from "./../../../actions/messages";
import { connect } from 'react-redux';

class ChatPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
            chatId: '',
            userName: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            /**
             * Validate length of message
             */
            if(this.state.message.trim().length === 0) return;
            
            let res = await this.props.createMessage({
                message: this.state.message,
                chatId: this.state.chatId,
                userName: this.state.userName
            })
            this.setState({
                message: ''
            })
        } catch (err) {
            console.error(err)
        }
    }

    componentWillReceiveProps(prop){
        if(prop.errors) {
            this.setState({
                errors: prop.errors
            })
        }
        if(prop.userNameReceived) {
            this.setState({
                userName: prop.userNameReceived.userName
            })
        }
        if(prop.chatIdReceived) {
            this.setState({
                chatId: prop.chatIdReceived.chatId
            })
        }
    }

    handleInputChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })


    render() {
        return (
            <form className="chatPanel" onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.message}
                       onChange={this.handleInputChange}
                       name="message"
                       className="messageField"
                       placeholder="Message.."/>
                <input type="submit"
                       className="messageSubmit" value="Send" />
            </form>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    chatIdReceived: state.chatId,
    userNameReceived: state.userName
})

export default connect(mapStateToProps, { createMessage })(ChatPanel);