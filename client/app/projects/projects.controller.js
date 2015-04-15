'use strict';

angular.module('websiteApp')
.controller('ProjectsController', function ($scope, $http) {
  $scope.personal_projects = [];
  $scope.work_projects = [];

  $http.get('/api/projects/personal').success(function(projects){
     $scope.personal_projects = projects;
  });

  $http.get('/api/projects/work').success(function(projects){
     $scope.work_projects = projects;
  });
});
