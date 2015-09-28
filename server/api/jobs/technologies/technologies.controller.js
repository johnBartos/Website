'use strict';

var db = require('../../../database/database.js');

exports.get = function (req, res) {

  console.log("Getting Technologies: " + req.params.jobId);

  db.FindInCollection('Technologies', {jobId: req.params.jobId})
    .then(function (technologies) {
      res.json(technologies);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};
