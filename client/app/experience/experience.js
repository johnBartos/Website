(function () { 'use strict'; })();

angular.module('websiteApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('experience', {
    url: '/experience',
    templateUrl: 'app/experience/experience.html',
    controller: 'ExperienceController'
  });
});
