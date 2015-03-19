var express = require('express');
  stylus = require('stylus'),
  logger = require('morgan'),
  bodyParser = require('body-parser');
  db = require(__dirname + '/server/provider/dataprovider.js');

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


app.get('/partials/:partialPath', function(req, res){
  console.log(req.params.partialPath);
  res.render('partials/' + req.params.partialPath)
});

app.get('/records', function(req, res){
  //db.insertRecord();
  console.log("Getting records");
  db.getRecord(function(rec){
    res.json(rec);
  });
});

app.get('*', function(req, res){
  res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + ' ...');
