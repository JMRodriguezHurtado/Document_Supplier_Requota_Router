const routes = require('./routes/index');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');

const server = express();
server.name = 'RadarBackServer';

server.use(cors());
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({extended: true, limit: '50mb'}));
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    if (req.method === "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
  });
  
  server.use((err, req, res, next) => { 
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });
  
  server.use('/documents', routes);
  
  module.exports = server;