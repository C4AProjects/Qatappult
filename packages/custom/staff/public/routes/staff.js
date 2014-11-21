'use strict';

angular.module('mean.staff').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('staff example page', {
      url: '/staff/example',
      templateUrl: 'staff/views/index.html'
    });
  }
]);
