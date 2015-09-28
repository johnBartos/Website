'use strict';

var db = require('../../../database/database.js');

exports.get = function (req, res) {

  console.log("Getting Works: " + req.params.jobId);

  db.GetFromCollection(req.params.jobId)
    .then(function (works) {
      res.json(works);
    })
    .catch(function (reason) {
      res.status(500).json(reason);
    });

};
