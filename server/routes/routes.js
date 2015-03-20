var express = require('express');
var router = express.Router();

router.get('/partials/:partialPath', function(req, res){
    console.log(req.params.partialPath);
    res.render('partials/' + req.params.partialPath)
});

router.get('/records', function(req, res){
    db.insertRecord();
    console.log("Getting records");
    db.getRecord(function(rec){
        res.json(rec);
    });
});

router.get('*', function(req, res){
    res.render('index');
});

module.exports = router;
