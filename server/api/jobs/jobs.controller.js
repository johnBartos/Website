'use strict';

var db = require('./jobs.database');

exports.get_all = function (req, res) {

  console.log("Getting Jobs");

  db.get_all()
    .then(function (jobs) {
      res.json(jobs);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};

exports.get_one = function (req, res){

  console.log("Getting Job: " + req.params.jobId);

  db.get(req.params.jobId)
    .then(function (job) {
      res.json(job);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};
