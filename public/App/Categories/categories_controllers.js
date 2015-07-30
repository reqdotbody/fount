angular.module('fount.category', [])

.controller('CategoryController', function ($scope, $http, $window, $location, CurrentCategory){

  console.log(CurrentCategory.category);
  $scope.categories = [];

  $scope.getCategories = function(){
    // Simple GET request example
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

  $scope.updateCategory = function(categoryObj){
    CurrentCategory.category = categoryObj.category;
  }

  $scope.getCategories();

});
