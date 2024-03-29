(function () {
  "use strict";

  angular // eslint-disable-line no-undef
    .module("folioApp")
    .controller("DeveloperController", [
      "$scope",
      "$location",
      "$anchorScroll",
      function ($scope, $location, $anchorScroll) {
        // set page class
        $scope.pageClass = "developer";

        // utility function for linking between views
        $scope.go = function (path) {
          $location.path(path);
        };

        // page specific objects
        $scope.developerHeadshot = {
          url: "https://avatars3.githubusercontent.com/u/1449455?s=460&v=4",
          alt: "developer headshot"
        };

        $scope.softwareHeaderLink = {
          url: "https://www.github.com/Jac21"
        };

        $scope.fabButtonLinks = {
          email: "mailto:mail@jeremycantu.com?subject=Jeremy Cantú's Portfolio Inquiry&body=Let's talk!",
          file: "https://jac21.github.io/public/content/jCantuResume.pdf",
          github: "https://www.github.com/Jac21",
          linkedin: "https://www.linkedin.com/in/jeremycantu"
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

        // initialize FAB
        var elem = document.querySelector(".fixed-action-btn");

        var instance = M.FloatingActionButton.init(elem, {
          direction: "left",
          hoverEnabled: false
        });

        // initialize materialbox
        var elem = document.querySelectorAll(".materialboxed");
        var instance = M.Materialbox.init(elem, {
          inDuration: 275,
          outDuration: 200
        });

        // initialize blog container wrapper style
        var secondaryThemeHexCode = "#ffab40";

        if (document.querySelector("div.container.blog-container")) {
          document.body.parentNode.style.boxShadow =
            "0 0 0 5px " + secondaryThemeHexCode + " inset";
        } else {
          document.body.parentNode.style.boxShadow = "";
        }
      }
    ]);
})();
