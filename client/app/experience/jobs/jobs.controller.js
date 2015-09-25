(function () { 'use strict'; })();


angular.module('websiteApp')
.controller('JobsController', function ($scope, $http, $stateParams) {

  $scope.job = {};
  $scope.projects = [];
  $scope.languages = [];
  $scope.technologies = [];

  activate();

  function activate () {

    getJob()
    .then(getTechnologies)
    .then(getLanguages)
    .then(getWorks);


     function getJob () {
      return $http.get('/api/jobs/' + $stateParams.jobId)
      .then(function (res){
        $scope.job = res.data[0];
      }, function (error) {
        console.log('error getting job ' + $stateParams.jobId);
      });
    }

     function getLanguages () {
      return $http.get('/api/jobs/languages/' + $stateParams.jobId)
      .then(function (res){
        $scope.languages = res.data;
      }, function (error) {
        console.log('error getting languages for job ' + $stateParams.jobId);
      });
    }

    function getWorks () {
      return $http.get('/api/jobs/works/' + $stateParams.jobId)
      .then(function (res){
        $scope.works = res.data;

        // Hack for getting Masonry to work
        setTimeout(function () {
          $(".masonry-container").masonry({
              itemSelector: ".item",
              columnWidth: ".item"
          });
        }, 200);
      }, function (error) {
        console.log('error getting works for job ' + $stateParams.jobId);
      });
    }

    function getTechnologies () {
      return $http.get('/api/jobs/technologies/' + $stateParams.jobId)
      .then(function (res){
        $scope.technologies = res.data;
      }, function (error) {
        console.log('error getting technologies job ' + $stateParams.jobId);
      });
    }

  }

});
