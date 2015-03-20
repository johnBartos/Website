//Main application
'use strict';

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express');

var app = express();
require('./config/express')(app);
require('./routes.js')(app);

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + ' ...');

exports = module.exports = app;
