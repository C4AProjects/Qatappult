'use strict';

angular.module('mean.service').factory('Service', ['$http', function($http){
    return {
      services: [],
      name: 'service'      
    };
  }
]);
