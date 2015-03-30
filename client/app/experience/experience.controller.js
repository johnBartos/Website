'use strict';

angular.module('websiteApp')
.controller('ExperienceController', function ($scope, $http) {
  $scope.myVar = [];

  $http.get('/api/jobs').success(function(jobs){
     $scope.myVar = jobs;
  });
});
