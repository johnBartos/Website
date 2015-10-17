(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('JobsController', function ($scope, $http, $stateParams, jobService) {

  $scope.job = {};

  activate();

  function activate () {

     jobService.getJob($stateParams.jobId)
     .then(function (result) {
       $scope.job = result;
       $scope.$apply();
     })
     .catch(function (reason) {
       console.log(reason);
     });


    // Hack for getting Masonry to work
    // setTimeout(function () {
    //   $(".masonry-container").masonry({
    //       itemSelector: ".item",
    //       columnWidth: ".item"
    //   });
    // }, 200);

  }

});
