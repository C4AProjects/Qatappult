'use strict';

angular.module('mean.feature').controller('FeatureController', ['$scope', 'Global', 'Feature',
  function($scope, Global, Feature) {
    $scope.global = Global;
    $scope.package = {
      name: 'feature'
    };
  }
]);
