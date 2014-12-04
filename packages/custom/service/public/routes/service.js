'use strict';

angular.module('mean.service').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('service example page', {
      url: '/service/example',
      templateUrl: 'service/views/index.html'
    });
  }
]);
