(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('ProjectsController', function ($scope, $http) {
  $scope.projects = {};
  $scope.projects.list = [];

  activate();
  function  activate () {
    $http.get('/api/projects')
    .then(function (projects){
      $scope.jobs = projects;
    }, function (error) {
      console.log('Error getting projects: ' + projects);
    });
  }

});
