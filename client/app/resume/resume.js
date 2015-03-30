angular.module('websiteApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('resume', {
    url: '/resume',
    templateUrl: 'app/resume/resume.html',
    controller: 'MainController'
  });
});
