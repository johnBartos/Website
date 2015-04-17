angular.module('websiteApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('experience', {
    url: '/experience',
    templateUrl: 'app/experience/experience.html',
    controller: 'ExperienceController'
  })
  .state('experience_jobs',{
    url: '/experience/jobs/:jobId',
    templateUrl: 'app/experience/jobs/jobs.html',
    controller: 'JobsController'
  });
});
