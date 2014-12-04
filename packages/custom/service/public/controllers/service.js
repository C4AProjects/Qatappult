'use strict';

angular.module('mean.service').controller('ServiceController', ['$scope', 'Global', 'Service',
  function($scope, Global, Service) {
    $scope.global = Global;
    $scope.package = {
      name: 'service'
    };
  }
]);
