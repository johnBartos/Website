(function () { 'use strict'; })();

angular.module('websiteApp')
  .service('gitService', function ($http, $q) {

  this.getActivity = function () {
    return getActivity();
  };

  function getActivity () {
    return new Promise(function (resolve, reject) {
      $http.get('/api/git-activity')
        .then(function (result) {
          resolve(result.data);
        })
        .catch(function (reason) {
          console.log('ERROR ' + reason);
          reject(reason);
        });
    });
  }
});
