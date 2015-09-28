//Main application
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var app = express();

require('./config/express')(app);
require('./routes.js')(app);

require('./database/database.js')
  .OpenConnection()
  .catch(function (reason) {
    console.log('Couldnt open mongo connection: ' + reason);
  });

app.listen(config.port);
console.log('Listening on port ' + config.port + ' ...');

exports = module.exports = app;
