'use strict';

angular.module('mean.certification').controller('CertificationController', ['$scope', 'Global', 'Certification',
  function($scope, Global, Certification) {
    $scope.global = Global;
    $scope.package = {
      name: 'certification'
    };
  }
]);
