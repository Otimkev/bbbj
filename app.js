const express = require('express');
const path = require('path');
const server = express();
const mongoose = require('mongoose');
const pug = require('pug');
const bodyParser = require('body-parser');

//setting up the body parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//db connection setup
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongodataB = 'mongodb://localhost:27017/sample';
mongoose.connect(mongodataB);

//view engine
server.set('views',path.join(__dirname,'views'));
server.set('view engine','pug');


//error handling
let db = mongoose.connection;
db.on('error',console.error.bind(console,'connection failed'));
db.once('open',()=>{console.log('connection successful')});

//require routers
const router = require('./routes/userR');

//user the router
server.use('/',router);





module.exports = server;

