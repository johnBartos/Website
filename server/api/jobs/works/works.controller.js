'use strict';

var db = require('./works.database');

exports.get = function (req, res){
  console.log("Getting Works: " + req.params.jobId);
  db.get(req.params.jobId, function (rec){
    res.json(rec);
  });
};
