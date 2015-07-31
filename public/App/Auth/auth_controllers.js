angular.module('fount.auth', [])

.controller('AuthController', ['$scope', '$window', '$location', '$http', '$rootScope', '$state', 'AuthFactory', function($scope, $window, $location, $http, $rootScope, $state, AuthFactory){

  $scope.user = {};
  $scope.error = null;

  $scope.signin = function (user) {
    console.log(user);
    $http({
      method: 'POST',
      url: 'api/v1/signin',
      headers: {'Content-Type': 'application/json'},
      data: user
    })
    .success(function(data) {
      console.log(data);
      $scope.message = data.message;

      //Saves the user information that the server sends back
      var user = {
        username: data.name,
        userID: data.id
      }

      //Assigns the user to be the current user
      $scope.assignCurrentUser(user);

      console.log("Current username: " + $rootScope.currentUser.username);
      console.log("Current userID: " + $rootScope.currentUser.userID);

      //Redirect to home
      AuthFactory.getAuth();
      $state.go("index");
    })
    .error(function(err){
      throw err;
    })
  };

  $scope.signup = function (user) {
    console.log(user);
    $http({
      method: 'POST',
      url:'api/v1/signup',
      headers: {'Content-Type': 'application/json'},
      data: user
    })
    .success(function(data) {
      console.log(data);
      $scope.message = data.message;
      //Signs the user in automatically
      $scope.signin(user);
    })
    .error(function(err){
      console.log(err);
      throw err;
    })
  };

  $scope.assignCurrentUser = function(user) {
      $rootScope.currentUser = user;
    }

}]);
