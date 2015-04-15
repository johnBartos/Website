'use strict'
var personal_db = require('./personal/personal.database');
var work_db = require('./work/work.database');

exports.get_personal = function(req, res){
  console.log("Getting Personal Projects");
  personal_db.get(function(rec){
    res.json(rec);
  });
};

exports.get_work = function(req, res){
  console.log("Getting Work Projects");
  work_db.get(function(rec){
    res.json(rec);
  });
};
