//AUTH CONTROLLER

angular.module('fount.auth', [])

.controller('AuthController', ['$scope', '$window', '$location', '$http', function($scope, $window, $location, $http){

  $scope.user = {};
  $scope.error = null;
  var url = 'http://localhost:3000'

  $scope.signin = function (user) { 
    console.log(user);
    $http({
      method: 'POST',
      url: url + '/api/v1/signin',
      headers: {'Content-Type': 'application/json'},
      data: user
    })
  .success(function(data) {
    console.log(data);
    $scope.message = data.message;
  })
  .error(function(err){
    throw err;
  })
  };


  $scope.signup = function (user) { 
    console.log(user);
    $http({
      method: 'POST',
      url: url + '/api/v1/signup',
      headers: {'Content-Type': 'application/json'},
      data: user
    })
  .success(function(data) {
    console.log(data);
    $scope.message = data.message;
  })
  .error(function(err){
    throw err;
  })
  };


}]);

//req.sessionid

//   .controller('decrCtrl', ['$scope', function($scope){
//     $scope.decrement = function(){
//       $scope.count.number--
//     }
// }]);

// $http.post('/someUrl', {msg:'hello word!'}).
  // success(function(data, status, headers, config) {
  //   // this callback will be called asynchronously
  //   // when the response is available
  // }).
  // error(function(data, status, headers, config) {
  //   // called asynchronously if an error occurs
  //   // or server returns response with an error status.
  // });

