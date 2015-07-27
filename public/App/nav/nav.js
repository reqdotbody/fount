angular.module('fount.nav', [])

.controller('NavController', function($scope, $window){

  $scope.isAuth = function(){
    //TODO -- build the Auth factory in services
  };

  $scope.logout = function(){
    $http({
      method: 'POST',
      //wildcard?
      url: '/logout',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
  .success(function(data) {
    console.log(data);
    $scope.message = data.message;
  })
  .error(function(err){
    throw err;
  })
  };



});
