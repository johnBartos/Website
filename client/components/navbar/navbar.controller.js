'use strict';

angular.module('websiteApp')
.controller('NavbarController', function ($scope, $location) {
  $scope.menu = [{
    'title': 'Home',
    'link': '/'
  },
  {
    'title': 'Blag',
    'link': '/blog'
  },
  {
    'title' : 'Experience',
    'link' : '/experience'
  },
  {
    'title' : 'Projects',
    'link' : '/projects'
  },
  {
    'title' : 'About',
    'link' : '/about'
  }
  ];

  $scope.isCollapsed = true;

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});
