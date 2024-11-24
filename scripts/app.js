// wrap in an IIFE to remove variables from global scope
(function () {
  "use strict";

  angular
    .module("folioApp", ["ui.router", "responsive-images"]) // eslint-disable-line no-undef
    .config(function (
      $stateProvider,
      $urlRouterProvider,
      $compileProvider,
      $locationProvider
    ) {
      $compileProvider.debugInfoEnabled(false);

      $locationProvider.html5Mode({
        enabled: true,
      });

      $stateProvider
        .state("developer", {
          url: "/developer",
          templateUrl: "templates/main/developer.html",
          controller: "DeveloperController",
        })
        .state("about", {
          url: "/about",
          templateUrl: "templates/main/about.html",
          controller: "DeveloperController",
        })
        .state("ideas", {
          url: "/ideas",
          templateUrl: "templates/main/ideas.html",
          controller: "DeveloperController",
        })
        .state("now", {
          url: "/now",
          templateUrl: "templates/main/now.html",
          controller: "DeveloperController",
        })
        .state("photographer", {
          url: "/photographer",
          templateUrl: "templates/main/photographer.html",
          controller: "PhotographerController",
        })
        .state("vera-photoshoot", {
          url: "/vera-photoshoot",
          templateUrl: "templates/photoshoots/vera-photoshoot.html",
          controller: "PhotographerController",
        })
        .state("japan-photoshoot", {
          url: "/japan-photoshoot",
          templateUrl: "templates/photoshoots/japan-photoshoot.html",
          controller: "PhotographerController",
        })
        .state("puerto-rico-photoshoot", {
          url: "/puerto-rico-photoshoot",
          templateUrl: "templates/photoshoots/puerto-rico-photoshoot.html",
          controller: "PhotographerController",
        })
        .state("washington-photoshoot", {
          url: "/washington-photoshoot",
          templateUrl: "templates/photoshoots/washington-photoshoot.html",
          controller: "PhotographerController",
        })
        .state("puerto-rico-2024-photoshoot", {
          url: "/puerto-rico-2024-photoshoot",
          templateUrl: "templates/photoshoots/puerto-rico-2024-photoshoot.html",
          controller: "PhotographerController",
        })
        .state("summer-2024-photoshoot", {
          url: "/summer-2024-photoshoot",
          templateUrl: "templates/photoshoots/summer-2024-photoshoot.html",
          controller: "PhotographerController",
        })
        .state("japan-taiwan-2024-photoshoot", {
          url: "/japan-taiwan-2024-photoshoot",
          templateUrl:
            "templates/photoshoots/japan-taiwan-2024-photoshoot.html",
          controller: "PhotographerController",
        })
        .state("skillset", {
          url: "/skillset",
          templateUrl: "templates/projects/skillset.html",
          controller: "DeveloperController",
        })
        .state("etude", {
          url: "/etude",
          templateUrl: "templates/projects/etude.html",
          controller: "DeveloperController",
        })
        .state("reponotes", {
          url: "/reponotes",
          templateUrl: "templates/projects/reponotes.html",
          controller: "DeveloperController",
        })
        .state("tfstoolset", {
          url: "/tfstoolset",
          templateUrl: "templates/projects/tfstoolset.html",
          controller: "DeveloperController",
        });

      $urlRouterProvider.otherwise("/developer");
    });
})();
