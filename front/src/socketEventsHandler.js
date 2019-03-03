import openSocket from 'socket.io-client';
import { API_REQ } from './config'
const socket = openSocket(API_REQ);

function connectSocket(callback) {
    socket.on('updateData', (data) => {
        if(typeof data === 'object') callback(data);
    })
}

export { connectSocket }