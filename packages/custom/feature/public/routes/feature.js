'use strict';

angular.module('mean.feature').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('feature example page', {
      url: '/feature/example',
      templateUrl: 'feature/views/index.html'
    });
  }
]);
