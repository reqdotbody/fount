angular.module('fount.results', [])

.controller('ResultsController', function($scope, $http, $window, $location, $stateParams, $rootScope){

  
  $scope.results = [];
  $scope.category = $stateParams.category;
  $scope.subcategory = $stateParams.subcategory;

  $scope.getResults = function(){
    // Simple GET request :
    console.log('http://localhost:3000/api/v1/' + $scope.category + '/' + $scope.subcategory);

    $http.get('http://localhost:3000/api/v1/' + $scope.category + '/' + $scope.subcategory).
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
    
    var message = {
      link_id: link.id,
      userID: $rootScope.currentUser.userID,
      vote: direction,
    }

    $http.post('api/v1/link/vote', message).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data);
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

