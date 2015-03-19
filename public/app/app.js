angular.module('app', ['ngResource', 'ngRoute']);
angular.module('app').config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({
    enabled: true
  });
  $routeProvider
    .when('/', { templateUrl: 'partials/main', controller: 'mainController' });
  $routeProvider
    .when('/data', { templateUrl: 'partials/data', controller: 'dataController' });
});

angular.module('app').controller('mainController', function($scope){
  $scope.myVar = "Hello Angular";
});

angular.module('app').controller('dataController', function($http, $scope){
  $scope.myVar = "Data!";
  $http.get('/records')
  .success(function(data){
    $scope.myData = data;
  });
});
