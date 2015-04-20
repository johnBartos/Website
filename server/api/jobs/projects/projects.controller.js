'use strict'
var db = require('./projects.database');

exports.get = function(req, res){
  console.log("Getting Projects: " + req.params.jobId);
  db.get(req.params.jobId, function(rec){
    res.json(rec);
  });
};
