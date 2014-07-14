angular.module('sandbox').controller('aboutCtrl', ['$scope', function($scope) {
	$scope.pageClass = "page-about";
	
	$scope.pageTitle = "About";

	$scope.message = "Hello this is the about controller speaking.";

	$scope.people = [
		"demetri",
		"natalie",
		"wilbur"
	];

	$scope.addPerson = function() {
		$scope.people.push("Person " + Math.floor(Math.random() * 100));
	};
}]);