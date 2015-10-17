(function () { 'use strict'; })();

angular.module('websiteApp')
  .service('jobService', function ($http, $q) {

    this.getJob = function (jobId)
    {
      var endpoints = [
        createJobsEndpoint(jobId),
        createLanguagesEndpoint(jobId),
        createTechnologiesEndpoint(jobId),
        createWorksEndpoint(jobId)
      ];

      return new Promise(function (resolve, reject) {
        $q.all(endpoints)
          .then(function (result) {
              var parsedData = parseResult(result);
              resolve(parsedData);
          })
          .catch(function (reason) {
            console.log('Error retrieving job data: ' + reason);
            reject(reason);
          });
      });

    };

    function parseResult (result)
    {
      var about = result[0].data[0];
      var languages = result[1].data;
      var tech = result[2].data;
      var works = result[3].data;

      return {
        about : about,
        languages: languages,
        technologies: tech,
        works: works
      };
    }

    function createJobsEndpoint (jobId) {
     return $http.get('/api/jobs/' + jobId);
   }

    function createLanguagesEndpoint (jobId) {
     return $http.get('/api/jobs/languages/' + jobId);
   }

   function createTechnologiesEndpoint (jobId) {
     return $http.get('/api/jobs/technologies/' + jobId);
   }

   function createWorksEndpoint (jobId) {
     return $http.get('/api/jobs/works/' + jobId);
   }

  });
