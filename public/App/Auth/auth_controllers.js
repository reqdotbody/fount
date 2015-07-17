//AUTH CONTROLLER

angular.module('fount.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth){
  $scope.user = {};
  $scope.error = null;

  $scope.signin = function () {
    //TODO 
    console.log("logged in controller");
  };

  $scope.signup = function () {
    //TODO
    console.log("signed in controller");
  };
});
