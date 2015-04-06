'use strict';

angular.module('websiteApp')
.controller('NavbarController', function ($scope, $location) {
  $scope.menu = [
  {
    'title': 'Blag',
    'link': '/blog'
  },
  {
    'title' : 'Projects',
    'link' : '/projects'
  },
  {
    'title' : 'Experience',
    'link' : '/experience'
  },
  {
    'title' : 'Resume',
    'link' : '/resume'
  }//,
  // {
  //   'title' : 'About',
  //   'link' : '/about'
  // }
  ];

  $scope.isCollapsed = true;

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});
