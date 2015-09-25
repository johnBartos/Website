(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('MainController', function ($scope, $http, gitService) {
  $scope.activity = {};
  $scope.activity.commits = [];

  activate();

  function activate () {
    gitService.getActivity()
    .then(function (result) {
      $scope.activity.commits = result;
      $scope.$apply();
    })
    .catch (function (reason) {
      console.log('couldnt get activity from git-service');
    });
  }

});
