import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    return axios.post('http://localhost:7777/api/messages/all')
        .then(res => {
            this.setState({
                messages: res.data
            })
        })
        .catch(err => {
          throw err;
        })
  }

  render() {
    return (
      <div className="App">
        <div id="Chat">
          {this.state.messages.length === 0 && <p>Loading messages...</p>}
          {
            this.state.messages.length > 0 && this.state.messages.map(message => (
                <div key={message._id}>
                  <p>{ message.text }</p>
                </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
