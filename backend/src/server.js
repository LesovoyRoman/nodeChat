module.exports = {
    emitEvent(data) {
        return io.emit('updateData', data)
    }
}

/**
 * Libs, requires
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const CONFIG = require('./config')
const ROUTES = require('./routes/all')
const db = require('./db');
const app = express();

/**
 * enable cors
 */
app.use(cors());

/**
 * Parse application/json content-type
 */
app.use(bodyParser());
app.use(bodyParser.json());


/**
 * Routes
 */
const chats = require('./routes/chats')
const messages = require('./routes/message');
app.use(ROUTES.API_ROUTES_MODELS.CHATS, chats)
app.use(ROUTES.API_ROUTES_MODELS.MESSAGES, messages);

/**
 * log http requests
 */
app.use(morgan('combined'));

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', async () => {
    console.log("Client Successfully Connected");
    io.emit('message', "hello world");
})

mongoose.connect(db.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => {console.log('Can not connect to the database ' + err)}
);

server.listen(CONFIG.API_PORT, () => {

    console.log(`Keep calm and listen to port ${CONFIG.API_PORT}`)

});