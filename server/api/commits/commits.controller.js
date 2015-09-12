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

function getCommitsOptions(repo) {
  return {
    uri: 'https://api.github.com/repos/johnBartos/' + repo + '/commits',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: getCommitsTransform
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

var getCommitsTransform = function (allCommits) {
  console.log(allCommits);
  return allCommits;
};

exports.getRepos = function (req, res) {
  console.log('Getting repos');

  var getRepos = function () {
    var options = getReposOptions();

    return rp.get(options)
    .pipe(res)
    .on('error', function (reason) {
      console.log(reason);
      res.status(400).json({
        success: false,
        reason: reason
      });
    });
  };

  getRepos()
};

exports.getCommits = function (req, res) {
  var repoName = req.params.repoName;
  console.log('Getting commits for ' + repoName);

  var getCommits = function (repoName) {
    var options = getCommitsOptions(repoName);
    return rp.get(options)
    .pipe(res)
    .on('error', function(reason) {
      console.log(reason);
      res.status(400).json({
        success: false,
        reason: reason
      });
    });
  };

  getCommits(repoName);
};
