'use strict';

angular.module('mean.service').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('service', {
      url: '/service',
      templateUrl: 'service/views/index.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'service/views/contact.html'
    });
  }
]);
