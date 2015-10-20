(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('MainController', function ($scope, $http, gitService) {

  $scope.activity = {};
  $scope.activity.events = [];

  activate();

  function activate () {
  gitService.getActivity()
    .then(function (result) {
      $scope.activity.events = result;
      $scope.$apply();
    })
    .catch (function (reason) {
      $scope.activity.events.push({
        repo: {
          name: "Oh no!"
        },
        commits: [ {
          message: "Couldn't get git activity :("
        }]
      });
      $scope.activity.events.push({
        repo: {
          name: "Oh no!"
        },
        commits: [ {
          message: "Couldn't get git activity :("
        }]
      });
      $scope.$apply();
      console.log('Couldnt get activity from git-service');
    });
  }

});
