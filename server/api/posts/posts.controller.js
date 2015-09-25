'use strict';

var db = require('./posts.database');

exports.index = function (req, res){

  console.log("Getting Posts");

  db.get()
  .then(function (posts) {
    res.json(posts);
  })
  .catch(function (reason) {
    res.status(500).json(reason);
  });

};
