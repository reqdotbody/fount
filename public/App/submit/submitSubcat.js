angular.module('fount.submitSubcat', [])

.controller('SubmitSubcatController', function($scope, $http, $state){

  $scope.newSubcatName = "";

  $scope.allCategories = [];
  $scope.selectedCategory = "";

  $scope.createSubcat = function(){
    var message = {
      name: $scope.newSubcatName,
      cat_id: $scope.selectedCategory.id
    }

    $http.post('api/v1/submit/subcategory', message).
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

    $state.go("index.subcategories.results", 
      { category: $scope.selectedCategory.name, 
        subcategory: $scope.newSubcatName
      });
  }

  $scope.getAllCategories = function(){
    $http.get('api/v1/categories').
      success(function(data, status, headers, config) {
        $scope.allCategories = data;
      }).
      error(function(data, status, headers, config) {
        console.log('error');
        console.log(data);
      });
  }
  
  $scope.getAllCategories();

});
