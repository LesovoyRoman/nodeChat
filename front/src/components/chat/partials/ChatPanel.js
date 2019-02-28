import React, { Component } from 'react'
import { createMessage } from "./../../../actions/messages";
import { connect } from 'react-redux';

class ChatPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createMessage(this.state.message).then(res => {
            this.setState({
                message: ''
            })
            Promise.resolve(res);
        }).catch(err => {
            console.error(err)
            Promise.reject(err)
        })
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
})

export default connect(mapStateToProps, { createMessage })(ChatPanel);