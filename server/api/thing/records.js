var express = require('express'),
    router = express.Router(),
    db = require('./test.js');

router.use(function(req, res, next){
    console.log('Record.js middleware ' + req.url);
    next();
});

router.get('/', function(req, res){
    // db = req.app.get('db');
    db.insertRecord();
    console.log("Getting records");
    db.getRecord(function(rec){
        res.json(rec);
    });
});

module.exports = router;
