(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('ProjectsController', function ($scope, $http) {
  $scope.projects = [];

  $http.get('/api/projects').success(function (projects){
     $scope.projects = projects;
  });
});
