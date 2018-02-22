(function() {
  "use strict";

  angular // eslint-disable-line no-undef
    .module("folioApp")
    .controller("PhotographerController", [
      "$scope",
      "$location",
      "$anchorScroll",
      function($scope, $location, $anchorScroll) {
        // set page class
        $scope.pageClass = "photographer";

        // page specific objects
        $scope.photographerHeadshot = {
          url: "dist/images/photographer/headshot-photo.jpg",
          alt: "photographer headshot"
        };

        $scope.photographerHeaderLink = {
          url: "https://www.jcantuphotography.com/"
        };

        // image data array
        $scope.images = [
          {
            caption: "Taken at Avila in Spain",
            url: "dist/images/photographer/photos/DSC_4705.JPG",
            alt: "Avila in Spain"
          },
          {
            caption: "Taken in Martindale, Texas",
            url: "dist/images/photographer/photos/DSC_4110.JPG",
            alt: "Martindale, Texas"
          },
          {
            caption: "Taken at the Buen Retiro Park in Madrid, Spain",
            url: "dist/images/photographer/photos/DSC_4544.JPG",
            alt: "Monument to Alfonso XII in Madrid, Spain"
          },
          {
            caption: "Taken at Castillo San Cristóbal in San Juan, Puerto Rico",
            url: "dist/images/photographer/photos/DSC_1201.jpg",
            alt: "Pier in San Juan, Puerto Rico"
          },
          {
            caption:
              "Taken at the Hamilton Pool Preserve near Dripping Springs, Texas",
            url: "dist/images/photographer/photos/DSC_0358.JPG",
            alt: "Hamilton Pool Waterfall near Dripping Springs, Texas"
          },
          {
            caption:
              "Taken at the Mohawk in Austin, Texas (Band: Anamanaguchi)",
            url: "dist/images/photographer/photos/DSC_0631.jpg",
            alt: "Anamanaguchi at the Mohawk in Austin, Texas"
          }
        ];

        // utility function for linking between views
        $scope.go = function(path) {
          $location.path(path);
        };

        // utility function to set viewport to the top of the page on element click
        $scope.backToTop = function() {
          $anchorScroll();
        };

        var elem = document.querySelector(".materialboxed");
        var instance = M.Materialbox.init(elem, {
          inDuration: 275,
          outDuration: 200
        });
      }
    ]);
})();
