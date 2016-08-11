angular.module('folioApp', ['ui.router'])

.controller('FolioController', ['$scope', '$location',
	function($scope, $location) {
		console.log('Angular version ' + angular.version.full + 'injected!');
		console.log('FolioController injected!');

		$scope.go = function ( path ) {
		  $location.path( path );
		};
	}
])

.config(function($stateProvider, $urlRouterProvider, $compileProvider) {

	// https://code.angularjs.org/1.5.5/docs/guide/production
  $compileProvider.debugInfoEnabled(false);

  $stateProvider
  .state('developer', {
    url: '/developer',
    templateUrl: 'templates/developer.html',
    controller: 'FolioController'
  })
  .state('photographer', {
    url: '/photographer',
    templateUrl: 'templates/photographer.html',
    controller: 'FolioController'
  })
  .state('skillset', {
    url: '/skillset',
    templateUrl: 'templates/skillset.html',
    controller: 'FolioController'
  })
  .state('etude', {
    url: '/etude',
    templateUrl: 'templates/etude.html',
    controller: 'FolioController'
  });

  $urlRouterProvider.otherwise('/developer');
});