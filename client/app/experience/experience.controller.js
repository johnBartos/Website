(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('ExperienceController', function ($scope, $http) {
  $scope.jobs = {};
  $scope.list = [];

  activate();

  function activate () {
    $http.get('/api/jobs')
    .then(function (jobs) {
      $scope.jobs.list = jobs.data;
    }, function (error) {
      console.log('Error getting jobs: ' + jobs);
    });
  }

});
