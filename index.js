'use strict';

//environment variables
require('dotenv').config();
const PORT = process.env.PORT;

//import server
const server = require('./src/server');

server.start(PORT);