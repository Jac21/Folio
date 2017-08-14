// wrap in an IIFE to remove variables from global scope
(function() {
	'use strict';

	angular.module('folioApp', ['ui.router', 'responsive-images']) // eslint-disable-line no-undef
		.config(function($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {

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

			$urlRouterProvider.otherwise('/developer');

			$locationProvider.html5Mode({
				enabled: true,
				requireBase: true
			});
		});
})();