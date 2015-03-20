var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');
    db = require('./server/database/database.js');
    router = require('./server/routes/routes.js')

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src:__dirname + '/public',
        compile: compile
    }
));
app.use(express.static(__dirname + '/public'));
app.use('/', router);

router.use(stylus.middleware(
    {
        src:__dirname + '/public',
        compile: compile
    }
));


var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + ' ...');
