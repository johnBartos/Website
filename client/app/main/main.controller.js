(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('MainController', function ($scope, $http, gitService) {
  $scope.activity = {};
  $scope.activity.commits = [];

  activate();

  function activate () {
    gitService.getRepos()
    .then(gitService.getCommits)
    .then(function (result) {
      $scope.activity.commits = result;
      $scope.$apply();
    })
    .catch (function (reason) {
      console.log('couldnt get commits from git-service');
    });
  }

});
