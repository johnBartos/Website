angular.module('websiteApp')
.service('gitService', function ($http, $q) {

  this.getRepos = function () {

    console.log('getting repos');

    return new Promise( function (resolve, reject) {

      $http.get('/api/commits/repos')
        .then(function (result) {
          console.log(result);
          resolve(result.data);
        })
        .catch(function (error) {
          console.log('ERROR ' + error);
          reject();
        });

  });

  };

  this.getCommits = function (repoNames) {

    console.log('getting commits');

    var allCalls = [];

    repoNames.forEach( function (element, index, array) {
        allCalls.push($http.get('/api/commits/repo/' + element));
  });

  return new Promise ( function (resolve, reject) {
    $q.all(allCalls)
      .then( function (result) {
        console.log(result);

        var listOfCommits = result.map( function (c) {
          return c.data;
        })
        .reduce( function (a, b) {
          return a.concat(b);
        });

        console.log(listOfCommits);
        resolve(listOfCommits);
      })
      .catch(function (error) {
        console.log('ERROR ' + error);
        reject();
      });
  });

  };

});
