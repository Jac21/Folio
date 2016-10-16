(function() {
	angular
		.module('folioApp')
		.controller('PhotographerController', ['$scope', '$location', '$anchorScroll',
			function($scope, $location, $anchorScroll) {
				// initialize materialbox
				$('.materialboxed').materialbox();

				// set page class
				$scope.pageClass = 'photographer';
				
				// utility function for linking between views
				$scope.go = function ( path ) {
				  $location.path( path );
				};

				// utility function to set viewport to the top of the page 
				// on element click
				$scope.backToTop = function() {
					$anchorScroll();
				};
			}
		]);
})();