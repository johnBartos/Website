(function () { 'use strict'; })();

angular.module('websiteApp')
.filter('fromNow', function () {
  return function (date) {
    return moment(date).fromNow();
  };
});
