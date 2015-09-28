'use strict';

var db = require('database');

exports.index = function (req, res){

  console.log("Getting Projects");

  db.GetFromCollection('Projects')
  .then(function (projects) {
    res.json(projects);
  })
  .catch(function (reason) {
    res.status(500).json(reason);
  });

};
