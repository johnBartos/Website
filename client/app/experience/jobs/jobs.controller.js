(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('JobsController', function ($scope, $http, $stateParams, jobService) {

  $scope.job = {};

  $scope.$apply(
    activate()
  );

  function activate () {
     jobService.getJob($stateParams.jobId)
     .then(function (result) {
       $scope.job = result;
       masonryDelay();
     })
     .catch(function (reason) {
       console.log(reason);
     });
   }

   function masonryDelay()
   {
     setTimeout(function () {
       $scope.$apply();
       $(".masonry-container").masonry({
           itemSelector: ".item",
           columnWidth: ".item"
       });
     }, 100);
   }

});
