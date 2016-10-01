(function() {
	angular
		.module('folioApp')
		.controller('PhotographerController', ['$scope', '$location', '$anchorScroll',
			function($scope, $location, $anchorScroll) {
				// set page class
				$scope.pageClass = 'photographer';

				$scope.go = function ( path ) {
				  $location.path( path );
				};

				$scope.backToTop = function() {
					$anchorScroll();
				};
			}
		]);
})();