'use strict';

angular.module('mean.service').controller('ServiceController', ['$scope', 'Global', 'Service', '$http', '$location',
  function($scope, Global, Service, $http, $location) {
    $scope.global = Global;
    $scope.service = { loc:{}};
    $scope.isAddingService = false;
    $scope.package = {
      name: 'service'
    };
    
    $scope.show_btn_contact = true; 
    if ($location.$$path === '/dashboard/services') {
      $scope.show_btn_contact = false;      
    }
    
    if (!$scope.serviceTypes) {
      $http.get('/services/types').success(function(data){         
          $scope.serviceTypes = data;
       });
    }
    
    $scope.selectServiceType = function(id){
      $scope.technologies = ($scope.serviceTypes.filter(function(type) {
                              return type.name === id;
                            }))[0].technologies;
    }
    
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
           post();
        });
      }else{
        post();
      }
      
      function post() {
        if ($scope.service._id) {
          $http.put('/users/' + $scope.global.user._id + '/services/' + $scope.service._id,  $scope.service)
           .success(function(data) {
            var id = $scope.service._id;
             $scope.services.forEach(function(obj, index){
              if (id === obj._id) {
                $scope.services[index] = data;
                return ;
              }
             })
             $scope.service = { loc:{}};
             //$location.url('/service');
           })
           .error(function(error) {
             console.log(error);
           });
        }else{
          $http.post('/users/' + $scope.global.user._id + '/services',  $scope.service)
           .success(function(data) {
             $scope.services.push(data);
             $scope.service = { loc:{}};
             //$location.url('/service');
           })
           .error(function(error) {
             console.log(error);
           });
        }
        $scope.isAddingService = false;
      }
    }
    
    $scope.editing = function(serviceId){
      $http.get('/users/' + $scope.global.user._id + '/services/' + serviceId).success(function(data){         
          $scope.service = data;
          $scope.selectServiceType($scope.service.type);
          $scope.isAddingService = true;
       });
    }
  }
]);
