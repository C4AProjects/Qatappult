'use strict';

angular.module('mean.staff').controller('StaffController', ['$scope', 'Global', 'Staff',
  function($scope, Global, Staff) {
    $scope.global = Global;
    $scope.package = {
      name: 'staff'
    };
  }
]);
