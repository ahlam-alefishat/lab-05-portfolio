'use strict';

// make a variable called express to use the express library
const express = require('express');

// initialize the express
const server = express();

// create a port number
const PORT = process.env.PORT || 3000;

//access any files inside the public folder
server.use(express.static('./public'));

// http://localhost:3000/test
server.get('/test', (request, response) => {
    response.send('its working');
});

server.listen(PORT, () => {
    console.log('listening on port', PORT);
});