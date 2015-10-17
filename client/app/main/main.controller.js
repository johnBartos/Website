(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('MainController', function ($scope, $http, gitService) {
  $scope.activity = {};
  $scope.activity.events = [];
  $scope.activity.event = {};

  $scope.$apply(
    activate()
  );

  function activate () {
    gitService.getActivity()
    .then(function (result) {
      $scope.activity.events = result;
      $scope.activity.event = result[0];
    })
    .catch (function (reason) {
      console.log('Couldnt get activity from git-service');
    });
  }

});
