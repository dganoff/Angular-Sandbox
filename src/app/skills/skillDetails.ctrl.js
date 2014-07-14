angular.module('sandbox').controller('skillDetailsCtrl', ['$scope', 'skillsService', function($scope, skillsService) {
	$scope.pageClass = "detailPage-skills";

	$scope.pageTitle = skillsService.name;
}]);