'use strict';

angular.module('mean.quote').controller('QuoteController', ['$scope', 'Global', 'Quote',
  function($scope, Global, Quote) {
    $scope.global = Global;
    $scope.package = {
      name: 'quote'
    };
  }
]);
