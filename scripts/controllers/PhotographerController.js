(function() {
	angular
		.module('folioApp')
		.controller('PhotographerController', ['$scope', '$location', '$anchorScroll',
			function($scope, $location, $anchorScroll) {
				// initialize materialbox
				$('.materialboxed').materialbox();

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