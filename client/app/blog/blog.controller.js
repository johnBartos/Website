(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('BlogController', function ($scope, $http) {
  $scope.posts = [];

activate();

  function activate () {
    $http.get('/api/posts')
    .then(function (posts) {
      $scope.posts  = posts;
    }, function (error) {
      console.log('error getting posts: ' + error);
    });
  }

});
