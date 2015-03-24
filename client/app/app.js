// angular.module('websiteApp', [
// 'ngResource',
// 'ngRoute'
//  ])
// .config(function($routeProvider, $locationProvider){
//     $locationProvider.html5Mode({
//       enabled: true
//     });
//     $routeProvider
//     .when('/', { templateUrl: 'app/main/main.html', controller: 'MainController'});
// })
'use strict';

angular.module('websiteApp', [
'ngResource',
'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider
  .otherwise('/');

  $locationProvider.html5Mode(true);
});
