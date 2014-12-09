'use strict';

angular.module('mean.service').controller('ServiceController', ['$scope', 'Global', 'Service', '$http', '$location',
  function($scope, Global, Service, $http, $location) {
    $scope.global = Global;
    $scope.service = { loc:{}};
    $scope.package = {
      name: 'service'
    };
    
    $scope.services = [];
    if ($scope.services.length==0) {
      $http.get('/users/' + $scope.global.user._id + '/services').success(function(data){         
          $scope.services = data;
       });
    }
 
    $scope.add = function(){
      if (!$scope.global.user._id) {        
        $http.get('/users/me').success(function(data){         
           $scope.global.user = data;
           $http.post('/users/' + $scope.global.user._id + '/services',  $scope.service)
           .success(function() {
             $scope.services.push($scope.service);
             $scope.service = { loc:{}};
             //$location.url('/service');
           })
           .error(function(error) {
             console.log(error);
           });
        });
      }else{
        $http.post('/users/' + $scope.global.user._id + '/services',  $scope.service)
           .success(function() {
             $scope.services.push($scope.service);
             $scope.service = { loc:{}};
             //$location.url('/service');
           })
           .error(function(error) {
             console.log(error);
           });
      }
      
    }
    
    $scope.editing = function(serviceId){
      $http.get('/users/' + $scope.global.user._id + '/services/' + serviceId).success(function(data){         
          $scope.service = data;
          $scope.isAddingService = true;
       });
    }
  }
]);
