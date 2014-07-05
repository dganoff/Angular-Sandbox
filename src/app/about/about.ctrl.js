app.controller('aboutCtrl', ['$scope', function($scope) {
	$scope.pageClass = "aboutPage";
	$scope.message = "Hello this is the about controller speaking.";

	$scope.people = [
		"demetri",
		"natalie",
		"wilbur"
	];

	$scope.addPerson = function() {
		$scope.people.push("asdf" + Math.floor(Math.random() * 100000));
	};
}]);