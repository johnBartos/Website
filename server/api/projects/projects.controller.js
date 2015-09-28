'use strict';

// var db = require('./projects.database');
var db = require('../../database/database.js');

exports.index = function (req, res){

  console.log("Getting Projects");

  db.getFromCollection('Projects')
  .then(function (projects) {
    res.json(projects);
  })
  .catch(function (reason) {
    res.status(500).json(reason);
  });

};
