import openSocket from 'socket.io-client';
import { API_REQ } from './config'
const socket = openSocket(API_REQ);

function connectSocket(cb) {
    // listen for any messages coming through
    // of type 'chat' and then trigger the
    // callback function with said message
    socket.on('message', (message) => {
        // console.log the message for posterity
        // trigger the callback passed in when
        // our App component calls connect
        if(typeof message === 'object') cb(message);
    })
}

export { connectSocket }