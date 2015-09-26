(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('BlogController', function ($scope, $http) {
  $scope.posts = {};
  $scope.posts.list = [];

activate();

  function activate () {
    $http.get('/api/posts')
    .then(function (response) {
      $scope.posts.list  = response.data;
    }, function (error) {
      console.log('error getting posts: ' + error);
    });
  }

});
