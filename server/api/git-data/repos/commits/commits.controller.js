'use strict'
var rp = require('request-promise');
var errors = require('request-promise/errors');
var formatter = require('./commits.formatter.js');
var cache = require('./commits.cache.js');


exports.getCommits = function (req, res) {
  var repoName = req.params.repoName;

  console.log('Getting commits for ' + repoName);

  var getCommits = function (repoName) {
    var options = getCommitsOptions(repoName);

    return rp.get(options)
    .then(function(response) {
      cache.save(repoName, response.etag, response.commits);
      res.status(200).json(response.commits);
    })
    .catch(errors.StatusCodeError, function (reason) {
      if(reason.statusCode == '304') {
        console.log('commits for ' + repoName + ' havent changed, using values from cache');
        res.status(200).json(cache[repoName].commits);
      }
      else {
        res.status(400).json({
          success: false,
          reason: reason
        });
      }
    })
    .catch(errors.RequestError, function(reason) {
      console.log(reason);
      res.status(400).json({
        success: false,
        reason: reason
      });
    });
  };

  getCommits(repoName);
};

function getCommitsTransform (body, response) {
  var commits = formatter.format(body, 5);

  return {
    commits: commits,
    etag: response.headers.etag
  };
};

function getCommitsOptions(repo) {
  return {
    uri: 'https://api.github.com/repos/johnBartos/' + repo + '/commits',
    method: 'GET',
    headers: {'user-agent': 'node.js', 'If-None-Match': cache.getETag(repo)},
    resolveWithFullResponse: true,
    transform: getCommitsTransform
  };
};
