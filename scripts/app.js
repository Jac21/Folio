// wrap in an IIFE to remove variables from global scope
(function() {
	'use strict';

	angular.module('folioApp', ['ui.router', 'ngAnimate'])
		.config(function($stateProvider, $urlRouterProvider, $compileProvider) {

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
		  .state('skillset', {
		    url: '/skillset',
		    templateUrl: 'templates/skillset.html',
		    controller: 'DeveloperController'
		  })
		  .state('etude', {
		    url: '/etude',
		    templateUrl: 'templates/etude.html',
		    controller: 'DeveloperController'
		  });

		  $urlRouterProvider.otherwise('/developer');
		});
})();