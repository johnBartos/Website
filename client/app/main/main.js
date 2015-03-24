angular.module('websiteApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'app/main/main.html',
    controller: 'MainController'
  });
});
