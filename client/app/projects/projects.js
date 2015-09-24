(function () { 'use strict'; })();

angular.module('websiteApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('projects', {
    url: '/projects',
    templateUrl: 'app/projects/projects.html',
    controller: 'ProjectsController'
  });
});
