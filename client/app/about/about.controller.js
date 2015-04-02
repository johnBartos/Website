'use strict';

angular.module('websiteApp')
.controller('AboutController', function ($scope, $http) {
  $scope.myVar = [];

  $http.get('/api/things').success(function(things){
    $scope.myVar = things;
  });
});
