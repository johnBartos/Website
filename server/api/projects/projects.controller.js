'use strict'
var db = require('./projects.database');

exports.index = function(req, res){
  console.log("Getting Projects");
  db.get(function(rec){
    res.json(rec);
  });
};
