'use strict';

angular.module('websiteApp')
.controller('MainController', function ($scope, $http) {
  $scope.myVar = [];

  $http.get('/api/things').success(function(things){
     $scope.myVar = things;
  });
});
