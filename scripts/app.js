// wrap in an IIFE to remove variables from global scope
(function() {
	'use strict';

	// TODO: https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views#view-names---relative-vs-absolute-names
	// TODO: https://scotch.io/tutorials/angular-routing-using-ui-router
	angular.module('folioApp', ['ui.router', 'responsive-images'])
		.config(function($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {

			// https://code.angularjs.org/1.5.5/docs/guide/production
		  $compileProvider.debugInfoEnabled(false);

		  $stateProvider
		  .state('developer', {
		    url: '/developer',
		    templateUrl: 'templates/main/developer.html',
		    controller: 'DeveloperController'
		  })
		  .state('photographer', {
		    url: '/photographer',
		    templateUrl: 'templates/main/photographer.html',
		    controller: 'PhotographerController'
		  })
		  .state('vera-photoshoot', {
		    url: '/vera-photoshoot',
		    templateUrl: 'templates/photoshoots/vera-photoshoot.html',
		    controller: 'PhotographerController'
		  })
		  .state('skillset', {
		    url: '/skillset',
		    templateUrl: 'templates/projects/skillset.html',
		    controller: 'DeveloperController'
		  })
		  .state('etude', {
		    url: '/etude',
		    templateUrl: 'templates/projects/etude.html',
		    controller: 'DeveloperController'
		  })
		  .state('reponotes', {
		    url: '/reponotes',
		    templateUrl: 'templates/projects/reponotes.html',
		    controller: 'DeveloperController'
		  })
		  .state('tfstoolset', {
		    url: '/tfstoolset',
		    templateUrl: 'templates/projects/tfstoolset.html',
		    controller: 'DeveloperController'
		  });


		  /*
		  	// I swear, there's some perceived slow-down between pages when activating this,
		  	// opting out until I figure out what that is exactly:
		  	
		  $locationProvider.html5Mode({
		  	enabled: true,
		  	requireBase: false
		  });
		  */

		  $urlRouterProvider.otherwise('/developer');
		});
})();