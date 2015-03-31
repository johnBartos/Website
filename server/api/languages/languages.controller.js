'use strict'
var db = require('./languages.database');

exports.index = function(req, res){
  console.log("Getting Languages");
  db.get(function(rec){
    res.json(rec);
  });
};
