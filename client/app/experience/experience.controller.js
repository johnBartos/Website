(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('ExperienceController', function ($scope, $http) {
  $scope.jobs = {};
  $scope.list = [];

  activate();

  function activate () {
    $http.get('/api/jobs')
    .then(function (response) {
      $scope.jobs.list = response.data;
    }, function (error) {
      console.log('Error getting jobs: ' + jobs);
    });
  }

});
