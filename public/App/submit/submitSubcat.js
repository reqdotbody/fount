angular.module('fount.submitSubcat', [])

.controller('SubmitSubcatController', function($scope, $http, $state, CurrentCategory){

  $scope.newSubcatName = "";
  $scope.category = CurrentCategory.category;

  $scope.allCategories = [];
  $scope.selectedCategory = "";
  console.log("current cateogry in sumbitsubcat : ", CurrentCategory.category);


  $scope.createSubcat = function(){
    var categoryId;

    //goes through the array of all categories and finds id of the current category
    $scope.allCategories.forEach(function (categoryObj){
      if (categoryObj.name === CurrentCategory.category){
        categoryId = categoryObj.id;
      }
    });

    var message = {
      name: $scope.newSubcatName,
      cat_id: categoryId,
    }

    $http.post('api/v1/submit/subcategory', message).
      then(function(data, status, headers, config){
        console.log("after the post request");
        $state.go("index.subcategories",
          { category: $scope.category,
            // subcategory: $scope.newSubcatName
          });
      })
      // success(function(data, status, headers, config) {
      //   // this callback will be called asynchronously
      //   // when the response is available
      //   console.log(data);
      // }).
      // error(function(data, status, headers, config) {
      //   // called asynchronously if an error occurs
      //   // or server returns response with an error status.
      //   console.log("error");
      //   console.log(data);
      // });

  }

  $scope.getAllCategories = function(){
    $http.get('api/v1/categories').
      success(function(data, status, headers, config) {
        $scope.allCategories = data;
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        console.log('error');
        console.log(data);
      });
  }

  $scope.getAllCategories();

});
