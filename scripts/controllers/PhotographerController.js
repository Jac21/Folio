(function() {
	angular
		.module('folioApp')
		.controller('PhotographerController', ['$scope', '$location',
			function($scope, $location) {
				console.log('Angular version ' + angular.version.full + ' injected!');
				console.log('PhotographerController injected!');

				$scope.go = function ( path ) {
				  $location.path( path );
				};
			}
		]);
})();