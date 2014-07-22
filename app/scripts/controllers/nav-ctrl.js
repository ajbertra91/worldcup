'use strict';

angular.module('worldCup')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
