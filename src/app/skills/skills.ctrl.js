(function(app) {
	var skillsCtrl = function($scope, $state, skillsService) {
		$scope.skills = [
			 {
			 	name: "HTML 5",
			 	type: "testing"
			 },
			 {
			 	name: "SASS",
			 	type: "testing"
			 },
			 {
			 	name: "CSS 3 Animations",
			 	type: "testing"
			 },
			 {
			 	name: "JavaScript",
			 	type: "testing"
			 },
			 {
			 	name: "Angular JS",
			 	type: "testing"
			 },
			 {
			 	name: "Mobile Apps",
			 	type: "testing"
			 },
		];

		$scope.selectSkill = function(skill) {
			skillsService.name = skill;

			// Scroll to the top of the page so you can see the detail page slide in:
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			
			$state.go('skillDetails');
		};
	};

	app.controller('skillsCtrl', ['$scope', '$state', 'skillsService', skillsCtrl]);
}(angular.module('sandbox')));