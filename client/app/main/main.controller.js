'use strict';

angular.module('websiteApp')
.controller('MainController', function ($scope, $http, gitService) {
  $scope.commits = [];

  (function() {
    gitService.getActivity()
    .then( function (result) {
      console.log('got activity ' + result);
      $scope.commits = result;
      $scope.$apply();
    })
    .catch (function (reason) {
      console.log('couldnt get activity from git-service');
    });
  })();

});
