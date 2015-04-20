'use strict'
var db = require('./languages.database');

exports.get = function(req, res){
  console.log("Getting Languages: " + req.params.jobId);
  db.get(req.params.jobId, function(rec){
    res.json(rec);
  });
};
