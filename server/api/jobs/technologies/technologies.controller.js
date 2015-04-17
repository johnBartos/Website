'use strict'
var db = require('./technologies.database');

exports.index = function(req, res){
  console.log("Getting Technologies");
  db.get(function(rec){
    res.json(rec);
  });
};
