require("dotenv").config();
require("dotenv").config();
const config = require("./config/config").ENV;
global.ENV = config;
global.node_env = process.env.NODE_ENV;

const Server = require("./models/server");
const server = new Server();

server.listen();
