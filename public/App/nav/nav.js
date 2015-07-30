angular.module('fount.nav', [])

.controller('NavController', function($scope, $window, AuthFactory){
  $scope.isAuth = AuthFactory.authStatus;
  AuthFactory.getAuth()

  $scope.logout = function(){
    $http({
      method: 'POST',
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
