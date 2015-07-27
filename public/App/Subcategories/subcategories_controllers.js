//QUERY CONTROLLERS
angular.module('fount.subcategory', [])

.controller('SubcategoryController', function($scope, $http, $stateParams){

  $scope.subcategories = [];
  $scope.category = $stateParams.category;

  $scope.getSubcategories = function(){
    // Simple GET request
    console.log($scope.category);
    console.log('http://localhost:3000/api/v1/' + $scope.category);

    $http.get('http://localhost:3000/api/v1/' + $scope.category).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.subcategories = data;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('error');
        console.log(data);
      });
  }

  $scope.getSubcategories();

});
