(function () { 'use strict'; })();

angular.module('websiteApp')
.service('gitService', function ($http, $q) {

  this.getActivity = function () {
    return getRepos()
    .then(getCommits);
  };

  function getRepos () {

    return new Promise( function (resolve, reject) {

      $http.get('/api/git-data/repos/names')
        .then(function (result) {
          resolve(result.data);
        })
        .catch(function (error) {
          console.log('ERROR ' + error);
          reject();
        });

  });

  }

  function getCommits (repoNames) {

    var allCalls = [];

    repoNames.forEach(function (element, index, array) {
        allCalls.push($http.get('/api/git-data/repos/' + element + '/commits'));
  });

  return new Promise (function (resolve, reject) {

    $q.all(allCalls)
      .then(function (result) {
        var listOfCommits = result.map(function (c) {
          return c.data;
        })
        .reduce(function (a, b) {
          return a.concat(b);
        });
        resolve(listOfCommits);
      })
      .catch(function (error) {
        console.log('ERROR ' + error);
        reject();
      });
  });

  }

});
