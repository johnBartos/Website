(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('BlogController', function ($scope, $http, $sce) {
  $scope.posts = [];

  $http.get('/api/posts').success(function (posts) {
    $scope.posts  = posts;
  });
});
