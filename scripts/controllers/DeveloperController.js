(function () {
	"use strict";

	angular // eslint-disable-line no-undef
		.module("folioApp")
		.controller("DeveloperController", ["$scope", "$location", "$anchorScroll",
			function ($scope, $location, $anchorScroll) {
				// initialize materialbox
				$(".materialboxed").materialbox(); // eslint-disable-line no-undef

				// set page class
				$scope.pageClass = "developer";

				// utility function for linking between views
				$scope.go = function (path) {
					$location.path(path);
				};

				// page specific objects
				$scope.developerHeadshot = {
					"url": "dist/images/developer/headshot-dev.png",
					"alt": "developer headshot"
				};

				$scope.ghostButtonLink = {
					"url": "https://www.github.com/Jac21"
				};

				$scope.fabButtonLinks = {
					"email": "mailto:mail@jeremycantu.com",
					"file": "https://jac21.github.io",
					"github": "https://www.github.com/Jac21",
					"linkedin": "https://www.linkedin.com/in/jeremycantu"
				};

				// utility function to add active css class to target element
				$scope.activate = function (event) {
					$(event.target).addClass("active"); // eslint-disable-line no-undef
				};

				// utility function to set viewport to the top of the page
				// on element click
				$scope.backToTop = function () {
					$anchorScroll();
				};
			}
		]);
})();
