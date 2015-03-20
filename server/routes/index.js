var express = require('express'),
    router = express.Router(),
    stylus = require('stylus');

var compile = function (str, path) {
    return stylus(str).set('filename', path);
}

// router.use(stylus.middleware(
//     {
//         src:__dirname + '/public',
//         compile: compile
//     }
// ));

router.use(function(req, res, next){
    console.log('Middleware ' + req.url);
    next();
});

router.use('/records', require('./records.js'));

router.get('/partials/:partialPath', function(req, res){
    console.log(req.params.partialPath);
    res.render('partials/' + req.params.partialPath)
});

router.get('/', function(req, res){
    console.log("index");
    res.render('index');
});

router.get('*', function(req, res){
    res.render('index');
});

module.exports = router;
