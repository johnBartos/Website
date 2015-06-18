'use strict'
var request = require('request');
var formatter = require('./commits.formatter.js');

var options = {
  uri: 'https://api.github.com/repos/johnBartos/Website/commits',
  method: 'GET',
  headers: {'user-agent': 'node.js'}
}

exports.index = function(req, res){
  console.log('Getting commits from Git');
  request(options, function (error, response, body) {
    console.log('Response from Git: ' + response.statusCode);
    if (!error && response.statusCode == 200) {
      var formattedCommits = formatter.format(body, 5);
      res.json(formattedCommits);
    }
  })
};
