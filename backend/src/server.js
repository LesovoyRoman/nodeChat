module.exports = {
    emitMessage(message) {
        return io.emit('message', message)
    }
}

/**
 * Libs
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./db');

// define the Express app & socket.io
const app = express();

// enable cors
app.use(cors());

// parse application/json content-type
app.use(bodyParser());
app.use(bodyParser.json());


/**
 * Routes
 */
//const users = require('../routes/user');
const messages = require('./routes/message');
app.use('/api/messages', messages);

// log http requests
app.use(morgan('combined'));

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', async () => {
    console.log("Client Successfully Connected");
    io.emit('message', "hello world");
})

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => {console.log('Can not connect to the database ' + err)}
);

const PORT = process.env.PORT || 7777;

// run server
server.listen(PORT, () => {

    console.log(`Keep calm and listen to port ${PORT}`)

});