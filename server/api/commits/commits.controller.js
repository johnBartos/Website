'use strict'
var rp = require('request-promise');
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


function getReposOptions() {
  return {
    uri: 'https://api.github.com/users/johnBartos/repos',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: getReposTransform
  };
}

var getReposTransform = function (userManifest) {
    var repoNames = [];
    var repos = JSON.parse(userManifest);
    repos.forEach( function (element, index, array) {
      var repo = element;
      repoNames.push(repo.name);
    });
    return repoNames;
};

exports.get = function (req, res) {
  console.log('Getting commits');

  var getRepos = function () {
    var options = getReposOptions();

    return rp.get(options)
    .then(function (repos) {
      console.log(repos);
    })
    .catch(function (reason) {
      console.log(reason);
      res.status(400).json({
        success: false,
        reason: reason
      });
    });
  }
  getRepos();
};
