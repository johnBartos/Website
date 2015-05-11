'use strict'

angular.module('websiteApp')
.controller('ExperienceController', function ($scope, $http) {
  $scope.jobs = [];

  $http.get('/api/jobs').success(function(jobs){
      $scope.jobs = jobs;
  });
});
