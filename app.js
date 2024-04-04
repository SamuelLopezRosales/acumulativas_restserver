require('dotenv').config();

const Server = require('./models/Server');

const server = new Server();

// servidor escuchando 
server.listen();