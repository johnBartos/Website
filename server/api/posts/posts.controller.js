'use strict'
var db = require('./posts.database');

exports.index = function(req, res){
  console.log("Getting Posts");
  db.get(function(rec){
    res.json(rec);
  });
};
