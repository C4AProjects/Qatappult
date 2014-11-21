'use strict';

angular.module('mean.certification').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('certification example page', {
      url: '/certification/example',
      templateUrl: 'certification/views/index.html'
    });
  }
]);
