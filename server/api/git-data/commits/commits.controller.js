'use strict'
var rp = require('request-promise');
var formatter = require('./commits.formatter.js');

exports.getCommits = function (req, res) {
  var repoName = req.params.repoName;
  console.log('Getting commits for ' + repoName);

  var getCommits = function (repoName) {
    var options = getCommitsOptions(repoName);
    return rp.get(options)
    .then(function(commits) {
      res.status(200).json(commits);
    })
    .catch(function(reason) {
      console.log(reason);
      res.status(400).json({
        success: false,
        reason: reason
      });
    });
  };

  getCommits(repoName);
};


var getCommitsTransform = function (allCommits) {
  return formatter.format(allCommits, 5);
};

function getCommitsOptions(repo) {
  return {
    uri: 'https://api.github.com/repos/johnBartos/' + repo + '/commits',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: getCommitsTransform
  };
}
