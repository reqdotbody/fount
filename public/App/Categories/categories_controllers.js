angular.module('fount.category', [])

.controller('CategoryController', function($scope, $http, $window, $location){
  

  $scope.categories = [];
  $scope.catColor = null;

  $scope.getCategories = function(){
    // Simple GET request example :
    $http.get('api/v1/categories').
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.categories = data;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('error');
        console.log(data);
      });
  }

  // $scope.changeColor = function(cat, bool){
  //   if(bool === true) {
  //       $scope.catColor = {'background-image':'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('+ cat.img + ')'};
  //   } else if (bool === false) {
  //       $scope.catColor = {'background-image':'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('+ cat.img + ')'};
  //   }
  // }

  $scope.getCategories();





});
