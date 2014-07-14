angular.module('sandbox').controller('mainCtrl', ['$scope', function($scope) {
	$scope.pageClass = "page-main";
	$scope.message = "Hello this is the main controller speaking.";
}]);