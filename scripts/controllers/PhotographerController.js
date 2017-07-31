(function() {
	angular
		.module('folioApp')
		.controller('PhotographerController', ['$scope', '$location', '$anchorScroll',
			function($scope, $location, $anchorScroll) {
				// set page class
				$scope.pageClass = 'photographer';

				// image data array
				$scope.images = [
				   {
				      "caption" : "Taken at the Hope Outdoor Gallery in Austin, Texas",
				      "url" : "dist/images/photographer/photos/DSC_0063-min.JPG",
				      "alt" : "Graffiti Park in Austin, Texas"
				   },
				   {
				      "caption" : "Taken at Castillo San Cristóbal in San Juan, Puerto Rico",
				      "url" : "dist/images/photographer/photos/DSC_1201.jpg",
				      "alt" : "Pier in San Juan, Puerto Rico"
				   },
				   {
				      "caption" : "Taken at the Buen Retiro Park in Madrid, Spain",
				      "url" : "dist/images/photographer/photos/DSC_4544-min.JPG",
				      "alt" : "Monument to Alfonso XII in Madrid, Spain"
				   },
				   {
				      "caption" : "Taken at the Hamilton Pool Preserve",
				      "url" : "dist/images/photographer/photos/DSC_0358-min.JPG",
				      "alt" : "Hamilton Pool Waterfall"
				   },
				   {
				      "caption" : "Taken at the Hamilton Pool Preserve",
				      "url" : "dist/images/photographer/photos/DSC_0453-min.JPG",
				      "alt" : "Hamilton Pool Butterfly"
				   },
				   {
				      "caption" : "Taken at the Mohawk in Austin, Texas (Band: Anamanaguchi)",
				      "url" : "dist/images/photographer/photos/DSC_0631.jpg",
				      "alt" : "Anamanaguchi at the Mohawk"
				   }
				];
				
				// utility function for linking between views
				$scope.go = function ( path ) {
				  $location.path( path );
				};

				// utility function to set viewport to the top of the page 
				// on element click
				$scope.backToTop = function() {
					$anchorScroll();
				};
			}
		]);
})();