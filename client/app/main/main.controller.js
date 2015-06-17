'use strict';

angular.module('websiteApp')
.controller('MainController', function ($scope, $http) {
  $scope.commits = [];

  $http.get('/api/commits').success(function(commits){
    $scope.commits = commits;
  });
});
