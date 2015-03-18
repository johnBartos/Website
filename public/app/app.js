angular.module('app', ['ngResource', 'ngRoute']);
angular.module('app').config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({
    enabled: true
  });
  $routeProvider
    .when('/', { templateUrl: 'partials/main', controller: 'mainCtrl' })
    .when('/data', {templateUrl: 'partials/data', controller: 'dataController' })
});

angular.module('app').controller('mainCtrl', function($scope){
  $scope.myVar = "Hello Angular";
});

angular.module('app').controller('dataController', function($scope){
  $scope.myData = "Data!";
});
