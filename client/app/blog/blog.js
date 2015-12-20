(function () { 'use strict'; })();

angular.module('websiteApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('blog', {
    url: '/blog',
    templateUrl: 'app/blog/blog.html',
    controller: 'BlogController'
  })
  .state('blog-post-manhattanjs', {
    url: '/blog/posts/manhattanjs',
    templateUrl: 'app/blog/posts/manhattanjs.html'
    });
});
