angular.module('fount.searchResults', [])

.controller('SearchResultsController', function($scope, $http, $stateParams, CurrentCategory, AuthFactory){
  $scope.isAuth = AuthFactory.authStatus;
  $scope.subcategories = [];

  $scope.getSubcategories = function(){
    // Simple GET request
    console.log($scope.category);
    console.log('api/v1/' + $scope.category);

    $http.get('api/v1/').
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


  $scope.getAllSubcategories = function(){
    $http.get('api/v1/subcategories/all').
      success(function(data, status, headers, config) {
        $scope.subcategories = data;
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        console.log('error');
        console.log(data);
      });
  }

  $scope.updateSubCategory = function(subcategoryObj){
    CurrentCategory.subCategory = subcategoryObj.subcategory;
    CurrentCategory.subCategoryId = subcategoryObj.subcatId.subcategory_id;
    console.log(CurrentCategory);
  }

  $scope.follow = function(subcategoryObj){
    // console.log(subcategoryObj);
    $http({
      url : '/follow',
      method : 'POST',
      data : subcategoryObj,
    }).then(function(results){
      console.log("successful post? : ", results);
    })
  }

  $scope.getAllSubcategories();

});
