'use strict';

var db = require('../../../database/');

exports.get = function (req, res) {

  console.log("Getting Works: " + req.params.jobId);

  db.FindInCollection('Works', {jobId: req.params.jobId})
    .then(function (works) {
      res.json(works);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};
