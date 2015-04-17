'use strict';

angular.module('websiteApp')
.controller('JobsController', function ($scope, $http, $stateParams) {
  $scope.projects = [];
  $scope.languages = [];
  $scope.technologies = [];

  $http.get('/api/jobs/languages').success(function(languages){
    console.log("Getting languages for " + $stateParams.jobId);
      $scope.languages = languages;
  });

  $http.get('/api/jobs/projects').success(function(projects){
      $scope.projects = projects;
  });

  $http.get('/api/jobs/technologies').success(function(technologies){
      $scope.technologies = technologies;
  });
});
