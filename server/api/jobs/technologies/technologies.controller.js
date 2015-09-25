'use strict';

var db = require('./technologies.database');

exports.get = function (req, res) {

  console.log("Getting Technologies: " + req.params.jobId);

  db.get(req.params.jobId)
    .then(function (technologies) {
      res.json(technologies);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};
