(function() {
  var app = angular.module('responsive-images', []);

  // UI element directive
  app.directive('responsiveImage', function($timeout) {
    return {
      restrict: 'E',
      templateUrl: 'responsive-image.html',
      // https://stackoverflow.com/questions/15207788/calling-a-function-when-ng-repeat-has-finished
      link: function(scope, element, attr) {
      	if (scope.$last === true) {
      		$timeout(function() {
      			// initialize materialbox
						$('.materialboxed').materialbox();
      		})
      	}
      }
    };
  });
})();