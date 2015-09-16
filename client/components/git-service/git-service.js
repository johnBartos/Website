angular.module('websiteApp')
.service('gitService', function ($http, $q) {

  this.getRepos = function () {

    console.log('getting repos');

    return new Promise( function (resolve, reject) {

      $http.get('/api/commits/repos')
      .then(function (result) {
        console.log(result);
        var repos = result.data;
        console.log('repos are ' + repos);
        resolve(repos);
      })
      .catch(function (error) {
        console.log('ERROR ' + error);
      });

  });

  };

  this.getCommits = function (repoNames) {

    console.log('getting commits');

    $http.get('/api/commits/repo/' + repo)
    .then(function (result) {
      console.log(result);
      var commits = result.data;
      return commits;
    })
    .catch(function (error) {
      console.log('ERROR ' + error);
    });

  };
});
