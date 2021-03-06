angular.module('fount.auth', [])

.controller('AuthController', ['$scope', '$window', '$location', '$http', '$rootScope', '$state', function($scope, $window, $location, $http, $rootScope, $state){

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
      username: data.username,
      userID: data.userID
    }

    //Assigns the user to be the current user
    $scope.assignCurrentUser(user);

    console.log("Current username: " + $rootScope.currentUser.username);
    console.log("Current userID: " + $rootScope.currentUser.userID);

    //Redirect to home
    $state.go("app.categories");

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
    throw err;
  })
  };

  $scope.assignCurrentUser = function(user) {
      $rootScope.currentUser = user;
    }

}]);