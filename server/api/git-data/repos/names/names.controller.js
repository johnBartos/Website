'use strict';

var rp = require('request-promise');
var errors = require('request-promise/errors');
var cache = require('./names.cache.js');


exports.getRepoNames = function (req, res) {
  console.log('Getting repos');
  console.log('cache etag: ' + cache.etag + ' cache names: ' + cache.names);

  var getRepos = function () {

    var options = getReposOptions();
    return rp.get(options)
    .then(function(response) {
      cache.save(response.etag, response.repoNames);
      res.status(200).json(response.repoNames);
    })
    .catch(errors.StatusCodeError, function (reason) {
      if(reason.statusCode == '304') {
        console.log('repo names havent changed, using values from cache: ' + cache.names);
        res.status(200).json(cache.names);
      }
      else {
        res.status(400).json({
          success: false,
          reason: reason
        });
      }
    })
    .catch(errors.RequestError, function (reason) {
      res.status(500).json({
        success: false,
        reason: reason
      });
    });

  };
  getRepos();
};

var getReposTransform = function (body, response) {
    var repoNames = [];
    var repos = JSON.parse(body);
    repos.forEach( function (element, index, array) {
      var repo = element;
      repoNames.push(repo.name);
    });

    return  {
      repoNames : repoNames,
      etag: response.headers.etag
    };
};

function getReposOptions() {
  return {
    uri: 'https://api.github.com/users/johnBartos/repos',
    method: 'GET',
    headers: {'user-agent': 'node.js', 'If-None-Match': cache.etag},
    transform: getReposTransform,
    resolveWithFullResponse: true,
  };
}
