angular.module('websiteApp', [
'ngResource',
'ngRoute'
 ])
.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
      enabled: true
    });
    $routeProvider
    .when('/', { templateUrl: 'app/main/main.html', controller: 'MainController'});
})
