(function () { 'use strict'; })();

angular.module('websiteApp')
.controller('JobsController', function ($scope, $http, $stateParams) {

  $scope.Job = {};
  $scope.Job.About = {};
  $scope.Job.Projects = [];
  $scope.Job.Languages = [];
  $scope.Job.Technologies = [];
  $scope.Job.Works = [];


  activate();

  function activate () {

    getJob()
      .then(getTechnologies)
      .then(getLanguages)
      .then(getWorks);


     function getJob () {
      return $http.get('/api/jobs/' + $stateParams.jobId)
      .then(function (response) {
        $scope.Job.About = response.data[0];
      }, function (error) {
        console.log('error getting job ' + $stateParams.jobId);
      });
    }

     function getLanguages () {
      return $http.get('/api/jobs/languages/' + $stateParams.jobId)
      .then(function (response) {
        $scope.Job.Languages = response.data;
      }, function (error) {
        console.log('error getting languages for job ' + $stateParams.jobId);
      });
    }

    function getWorks () {
      return $http.get('/api/jobs/works/' + $stateParams.jobId)
      .then(function (response) {
        $scope.Job.Works = response.data;

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
      .then(function (response) {
        $scope.Job.Technologies = response.data;
      }, function (error) {
        console.log('error getting technologies job ' + $stateParams.jobId);
      });
    }

  }

});
