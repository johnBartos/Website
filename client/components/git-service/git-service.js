angular.module('websiteApp')
.service('gitService', function ($http) {

  this.getRepos = function () {

    $http.get('/api/commits/repos')
    .then(function (result) {
      console.log(result);
      var repos = result.data;
      return repos;
    })
    .catch(function (error) {
      console.log('ERROR ' + error);
    });

  };

  function getCommitForRepo (repo) {
    return $http.get('/api/commits/repo/' + repo);
  }

});
