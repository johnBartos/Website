'use strict'
var db = require('./jobs.database');

// exports.index = function(req, res){
//     res.json([
//     {
//         name: "DataOnline",
//         info: "Current job"
//     }
//     ]);
// };

exports.index = function(req, res){
  // db = req.app.get('db');
  console.log("Getting records");
  db.get(function(rec){
    res.json(rec);
  });
};
