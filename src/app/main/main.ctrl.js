angular.module('sandbox').controller('mainCtrl', ['$scope', function($scope) {
	$scope.pageClass = "mainPage";
	$scope.message = "Hello this is the main controller speaking.";
}]);