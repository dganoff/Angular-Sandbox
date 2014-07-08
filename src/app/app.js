var app = angular.module('sandbox', [
	'ui.router',
	'ui.bootstrap',
	'ngResource',
	// 'ngRoute',
	'ngAnimate'
	])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /main
		$urlRouterProvider.otherwise("/main");
		// Set up the states
		$stateProvider
			// Main
			.state('main', {
				url: "/main",
				controller: "mainCtrl",
				templateUrl: "views/main.html"
			})
			.state('main.list', {
				url: "/list",
				templateUrl: "views/main.list.html",
				controller: ['$scope', function($scope) {
					$scope.items = ["A", "List", "Of", "Items"];
				}]
			})

			// About
			.state('about', {
				url: "/about",
				// Multi-views:
				views: {
					'': {
						controller: "aboutCtrl",
						templateUrl: "views/about.html"
					},

					'music@about': {
						controller: "musicCtrl",
						templateUrl: "views/music.html"
					},

					'skills@about': {
						controller: "skillsCtrl",
						templateUrl: "views/skills.html"
					}
				}
			})
			// Nested view:
			.state('about.list', {
				url: "/list",
				templateUrl: "views/about.list.html",
				controller: ['$scope', function($scope) {
					$scope.things = ["A", "Set", "Of", "Things"];
				}]
			});
}]);