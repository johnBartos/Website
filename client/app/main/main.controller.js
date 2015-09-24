(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('MainController', function ($scope, $http, gitService) {
  $scope.commits = [];

  (function() {
    gitService.getRepos()
    .then(gitService.getCommits)
    .then( function (result) {
      console.log('got all commits ' + result);
      $scope.commits = result;
      $scope.$apply();
    })
    .catch (function (reason) {
      console.log('couldnt get commits from git-service');
    });
  })();

});
