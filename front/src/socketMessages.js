import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:7777/');

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