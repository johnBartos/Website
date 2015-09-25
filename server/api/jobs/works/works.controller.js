'use strict';

var db = require('./works.database');

exports.get = function (req, res) {

  console.log("Getting Works: " + req.params.jobId);

  db.get(req.params.jobId)
    .then(function (works) {
      res.json(works);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};
