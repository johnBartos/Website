'use strict';

var db = require('../../database/database.js');

exports.get_all = function (req, res) {

  console.log("Getting Jobs");

  db.GetFromCollection('Jobs')
    .then(function (jobs) {
      res.json(jobs);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};

exports.get_one = function (req, res){

  console.log("Getting Job: " + req.params.jobId);

  db.FindInCollection(req.params.jobId)
    .then(function (job) {
      res.json(job);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};
