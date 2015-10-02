(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('MainController', function ($scope, $http, gitService) {
  $scope.activity = {};
  $scope.activity.commits = [];

  activate();

  function activate () {
    var start = Date.now();
    gitService.getCommits()
    .then(function (result) {
      var end = Date.now();
      console.log('Request time: ' + (end - start) + 'ms');
      $scope.activity.commits = result;
      $scope.$apply();
    })
    .catch (function (reason) {
      console.log('couldnt get activity from git-service');
    });
  }

});
