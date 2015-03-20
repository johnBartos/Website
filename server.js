var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    routes = require('./server/routes');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();


app.set('views', __dirname + '/server/views');
app.set('db', __dirname + '/server/database/database.js');
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(routes);

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + ' ...');
