'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const express = require('express');
const app = express();

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, function() {
    // WE'RE USING THIS CONSOLE.LOG() TO LET US KNOW THE SERVER IS RUNNING
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`)
});
// UP TO THIS POINT IS OUR BOILER PLATE

// ↓ THIS SECTION CONTAINS THE CONTROLLERS ↓

const rootController = require('./routes/index');
const friendsController = require('./routes/friends');

app.use('/', rootController); // <--- ROOT route
app.use('/friends', friendsController); // <--- /friends route