'use strict'
var rp = require('request-promise');

exports.getRepoNames = function (req, res) {
  console.log('Getting repos');

  var getRepos = function () {
    var options = getReposOptions();

    return rp.get(options)
    .then(function(repoNames) {
      res.status(200).json(repoNames);
      })
    .catch(function (reason) {
      console.log(reason);
      res.status(400).json({
        success: false,
        reason: reason
      });
    });

  };

  getRepos()
};

var getReposTransform = function (userManifest) {
    var repoNames = [];
    var repos = JSON.parse(userManifest);
    repos.forEach( function (element, index, array) {
      var repo = element;
      repoNames.push(repo.name);
    });
    return repoNames;
};


function getReposOptions() {
  return {
    uri: 'https://api.github.com/users/johnBartos/repos',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    transform: getReposTransform
  };
}
