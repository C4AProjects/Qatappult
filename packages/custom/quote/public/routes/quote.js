'use strict';

angular.module('mean.quote').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('quote example page', {
      url: '/quote/example',
      templateUrl: 'quote/views/index.html'
    });
  }
]);
