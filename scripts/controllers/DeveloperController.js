(function() {
	angular
		.module('folioApp')
		.controller('DeveloperController', ['$scope', '$location',
			function($scope, $location) {
				// set page class
				$scope.pageClass = 'developer';

				$scope.go = function ( path ) {
				  $location.path( path );
				};
			}
		]);
})();