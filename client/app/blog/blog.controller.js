'use strict';

angular.module('websiteApp')
.controller('BlogController', function ($scope, $http, $sce) {
  $scope.posts = [];

  $http.get('/api/posts').success(function(posts){
    $scope.posts  = posts;
  })})

.filter('to_trusted', ['$sce', function($sce){
  return function(text){
    return $sce.trustAsHtml(text);
  };
}]);
