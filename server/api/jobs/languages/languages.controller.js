'use strict';

var db = require('./languages.database');

exports.get = function (req, res) {

  console.log("Getting Languages: " + req.params.jobId);

  db.get(req.params.jobId)
    .then(function (languages) {
      res.json(languages);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};
