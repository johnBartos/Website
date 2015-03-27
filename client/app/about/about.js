angular.module('websiteApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'app/about/about.html',
    controller: 'MainController'
  });
});
