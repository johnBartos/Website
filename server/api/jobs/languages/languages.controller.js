'use strict';

var db = require('database');

exports.get = function (req, res) {

  console.log("Getting Languages: " + req.params.jobId);

  db.FindInCollection('Languages', {jobId: req.params.jobId})
    .then(function (languages) {
      res.json(languages);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};
