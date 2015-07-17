angular.module('fount.nav', [])

.controller('NavController', function($scope, $window){

  $scope.isAuth = function(){
    return Auth.isAuth();
    //TODO -- build the Auth factory in services
  };

  $scope.logout = function(){
    // TODO -- sign the user out
  }



});
