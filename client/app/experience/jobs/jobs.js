(function () { 'use strict'; })();

angular.module('websiteApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('experience_jobs',{
    url: '/experience/jobs/:jobId',
    templateUrl: 'app/experience/jobs/jobs.html',
    controller: 'JobsController'
  });
});
