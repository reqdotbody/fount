angular.module('fount.nav', [])

.controller('NavController', function($scope, $window, $http, AuthFactory){
  $scope.isAuth = AuthFactory.authStatus;
  AuthFactory.getAuth()

  $scope.logout = function(){
    $http.get('/logout')
    .success(function(data) {
      console.log(data);
      $scope.message = data.message;
      console.log($scope.message);
    })
    .error(function(err){
      throw err;
    })
  };
});
