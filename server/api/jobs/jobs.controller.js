'use strict';

var db = require('./jobs.database');

exports.get_all = function(req, res){
  console.log("Getting Jobs");
  db.get_all(function(rec){
    res.json(rec);
  });
};

exports.get_one = function(req, res){
  console.log("Getting Job: " + req.params.jobId);
  db.get(req.params.jobId, function(rec){
    res.json(rec);
  });
};
