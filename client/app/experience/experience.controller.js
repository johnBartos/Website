'use strict';

angular.module('websiteApp')
.controller('ExperienceController', function ($scope, $http) {
  $scope.jobs = [];
  $scope.languages = [];
  $scope.technologies = [];

  $http.get('/api/jobs').success(function(jobs){
      $scope.jobs = jobs;
  });

  $http.get('/api/languages').success(function(languages){
    $scope.languages = languages;
  });

  $http.get('/api/technologies').success(function(technologies){
    $scope.technologies = technologies;
  });
});
