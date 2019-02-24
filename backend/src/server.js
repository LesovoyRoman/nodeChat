/**
 * Libs
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./db');

/**
 * Routes
 */
//const users = require('../routes/user');
const messages = require('./routes/message');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => {console.log('Can not connect to the database ' + err)}
);

// define the Express app
const app = express();

// enable cors
app.use(cors());

// parse application/json content-type
app.use(bodyParser());
app.use(bodyParser.json());

app.use('/api/messages', messages);

// log http requests
app.use(morgan('combined'));

const PORT = process.env.PORT || 7777;

// run server
app.listen(PORT, () => {

    console.log(`Keep calm and listen to port ${PORT}`)

});