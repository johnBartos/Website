'use strict';

var db = require('../../database/');

exports.index = function (req, res){

  console.log("Getting Posts");

  db.GetFromCollection('Posts')
  .then(function (posts) {
    res.json(posts);
  })
  .catch(function (reason) {
    res.status(500).json(reason);
  });

};
