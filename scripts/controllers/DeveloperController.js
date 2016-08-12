(function() {
	angular
		.module('folioApp')
		.controller('DeveloperController', ['$scope', '$location',
			function($scope, $location) {
				console.log('Angular version ' + angular.version.full + 'injected!');
				console.log('DeveloperController injected!');

				$scope.go = function ( path ) {
				  $location.path( path );
				};
			}
		]);
})();