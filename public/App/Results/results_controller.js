angular.module('fount.results', [])

.controller('ResultsController', function($scope, $http, $window, $location, $stateParams, $rootScope, AuthFactory){
  $scope.isAuth = AuthFactory.authStatus;
  $scope.results = [];
  $scope.category = $stateParams.category;
  $scope.subcategory = $stateParams.subcategory;
  $scope.isAuth = AuthFactory.authStatus;

  $scope.getResults = function(){
    // Simple GET request
    console.log('api/v1/' + $scope.category + '/' + $scope.subcategory);
    $http.get('api/v1/' + $scope.category + '/' + $scope.subcategory).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.results = data;
        console.log($scope.results);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('error');
        console.log(data);
      });
  }

  $scope.vote = function(link, direction){
    console.log("link");
    console.log(link);

    var message = {
      link_id: link.id,
      vote: direction
    }
    console.log(message);

    $http.post('api/v1/link/vote', message).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data);
        $scope.getResults();
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("error");
        console.log(data);
      });
  }

  $scope.getResults();
  
});

