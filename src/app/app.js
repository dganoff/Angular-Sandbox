var app = angular.module('sandbox', [
	'ui.router',
	'ngResource',
	// 'ngRoute',
	'ngAnimate'
	])
	.config(function($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /main
		$urlRouterProvider.otherwise("/main");
		// Set up the states
		$stateProvider
		.state('main', {
			url: "/main",
			templateUrl: "views/main.html"
		})
		.state('main.list', {
			url: "/list",
			templateUrl: "views/main.list.html",
			controller: function($scope) {
				$scope.items = ["A", "List", "Of", "Items"];
			}
		})
		.state('about', {
			url: "/about",
			templateUrl: "views/about.html"
		})
		.state('about.list', {
			url: "/list",
			templateUrl: "views/about.list.html",
			controller: function($scope) {
				$scope.things = ["A", "Set", "Of", "Things"];
			}
	});
});