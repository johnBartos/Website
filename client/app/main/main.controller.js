'use strict';

angular.module('websiteApp')
.controller('MainController', function ($scope, $http, gitService) {
  $scope.commits = [];

  // $http.get('/api/commits').success(function(commits){
  //   $scope.commits = commits;
  // });

  (function() {
    gitService.getRepos()
    .then( function(result) {
      console.log('result is ' + result);
    });
  })();

});
