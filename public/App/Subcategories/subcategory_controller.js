angular.module('fount.subcategory', [])

.controller('SubcategoryController', function($scope, $http, $stateParams, CurrentCategory){

  $scope.subcategories = [];
  $scope.category = $stateParams.category;

  $scope.getSomeSubcategories = function(){
    // Simple GET request
    console.log($scope.category);
    console.log('api/v1/' + $scope.category);

    $http.get('api/v1/' + $scope.category).
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

  $scope.getSomeSubcategories();

});
