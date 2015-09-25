'use strict';

var db = require('./projects.database');

exports.index = function (req, res){

  console.log("Getting Projects");

  db.get()
  .then(function (projects) {
    res.json(projects);
  })
  .catch(function (reason) {
    res.status(500).json(reason);
  });

};
