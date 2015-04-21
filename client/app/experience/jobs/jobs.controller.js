'use strict';

angular.module('websiteApp')
.controller('JobsController', function ($scope, $http, $stateParams) {
  $scope.job;
  $scope.projects = [];
  $scope.languages = [];
  $scope.technologies = [];

  $http.get('/api/jobs/' + $stateParams.jobId).success(function(job){
    console.log("Getting job: " + $stateParams.jobId);
    $scope.job = job[0];
  });

  $http.get('/api/jobs/languages/' + $stateParams.jobId).success(function(languages){
    console.log("Getting languages for " + $stateParams.jobId);
    $scope.languages = languages;
  });

  $http.get('/api/jobs/works/' + $stateParams.jobId).success(function(works){
    console.log("Getting works for " + $stateParams.jobId);
    $scope.works = works;
  });

  $http.get('/api/jobs/technologies/' + $stateParams.jobId).success(function(technologies){
    console.log("Getting technologies for " + $stateParams.jobId);
    $scope.technologies = technologies;
  });
});
