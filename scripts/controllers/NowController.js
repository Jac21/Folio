(function () {
  "use strict";

  angular // eslint-disable-line no-undef
    .module("folioApp")
    .controller("NowController", [
      "$scope",
      "$location",
      "$anchorScroll",
      function ($scope, $location, $anchorScroll) {
        // set page class
        $scope.pageClass = "now";

        // utility function for linking between views
        $scope.go = function (path) {
          $location.path(path);
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

        // initialize blog container wrapper style
        var secondaryThemeHexCode = "#ffab40";

        if (document.querySelector("div.container.blog-container")) {
          document.body.parentNode.style.boxShadow =
            "0 0 0 5px " + secondaryThemeHexCode + " inset";
        } else {
          document.body.parentNode.style.boxShadow = "";
        }
      },
    ]);
})();
