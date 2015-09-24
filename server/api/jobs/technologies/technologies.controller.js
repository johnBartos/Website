'use strict';

var db = require('./technologies.database');

exports.get = function (req, res){
  console.log("Getting Technologies: " + req.params.jobId);
  db.get(req.params.jobId, function(rec){
    res.json(rec);
  });
};
