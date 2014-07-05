var app = angular.module('sandbox', [
  'ngResource',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });