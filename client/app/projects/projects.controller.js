(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('ProjectsController', function ($scope, $http) {
  $scope.projects = {};
  $scope.projects.list = [];

  activate();

  function activate () {
    $http.get('/api/projects')
    .then(function (response) {
      $scope.projects.list = response.data;
    }, function (error) {
      console.log('Error getting projects: ' + projects);
    });
  }

});
