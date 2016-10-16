(function() {
	angular
		.module('folioApp')
		.controller('DeveloperController', ['$scope', '$location', '$anchorScroll',
			function($scope, $location, $anchorScroll) {
				// set page class
				$scope.pageClass = 'developer';

				// utility function for linking between views
				$scope.go = function (path) {
				  $location.path(path);
				};

				// utility function to add active css class to target element
				$scope.activate = function(event) {
					$(event.target).addClass('active');
				};

				// utility function to set viewport to the top of the page 
				// on element click
				$scope.backToTop = function() {
					$anchorScroll();
				};
			}
		]);
})();