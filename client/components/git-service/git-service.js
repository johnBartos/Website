angular.module('websiteApp')
.service('gitService', function ($http) {

  this.getCommits = function() {

    $http.get('/api/commits/repos')
    .then(function(result) {
      console.log(result);
      var repos = result.data;
      return $http.get('/api/commits/repo/' + repos[0]);
    })
    .then(function(result) {
      console.log(result);
      var commits = result.data;
    })
    .catch(function (error) {
      console.log('ERROR ' + error);
    });
  }

});
