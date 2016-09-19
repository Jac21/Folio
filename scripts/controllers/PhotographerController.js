(function() {
	angular
		.module('folioApp')
		.controller('PhotographerController', ['$scope', '$location',
			function($scope, $location) {
				// set page class
				$scope.pageClass = 'photographer';

				$scope.go = function ( path ) {
				  $location.path( path );
				};
			}
		]);
})();