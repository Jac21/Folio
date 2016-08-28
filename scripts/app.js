// wrap in an IIFE to remove variables from global scope
(function() {
	'use strict';

	// TODO: https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views#view-names---relative-vs-absolute-names
	// TODO: https://scotch.io/tutorials/angular-routing-using-ui-router
	angular.module('folioApp', ['ui.router', 'ngAnimate'])
		.config(function($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {

			// https://code.angularjs.org/1.5.5/docs/guide/production
		  $compileProvider.debugInfoEnabled(false);

		  $stateProvider
		  .state('developer', {
		    url: '/developer',
		    templateUrl: 'templates/developer.html',
		    controller: 'DeveloperController'
		  })
		  .state('photographer', {
		    url: '/photographer',
		    templateUrl: 'templates/photographer.html',
		    controller: 'PhotographerController'
		  })
		  .state('vera-photoshoot', {
		    url: '/vera-photoshoot',
		    templateUrl: 'templates/photoshoots/vera-photoshoot.html',
		    controller: 'PhotographerController'
		  })
		  .state('skillset', {
		    url: '/skillset',
		    templateUrl: 'templates/skillset.html',
		    controller: 'DeveloperController'
		  })
		  .state('etude', {
		    url: '/etude',
		    templateUrl: 'templates/etude.html',
		    controller: 'DeveloperController'
		  })
		  .state('reponotes', {
		    url: '/reponotes',
		    templateUrl: 'templates/reponotes.html',
		    controller: 'DeveloperController'
		  })
		  .state('tfstoolset', {
		    url: '/tfstoolset',
		    templateUrl: 'templates/tfstoolset.html',
		    controller: 'DeveloperController'
		  });

		  $urlRouterProvider.otherwise('/developer');
		});
})();