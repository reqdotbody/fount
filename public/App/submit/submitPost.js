angular.module('fount.submitPost', [])

.controller('SubmitPostController', function($scope, $http, $state, $rootScope, CurrentCategory){
  $scope.subCategories = [];
  $scope.subCategory = CurrentCategory.subCategory;

  $scope.post = {
    title: '',
    url: '',
    subcat: {
      subcategory_id: null,
      subcategory: '',
      parentCategory_id: null,
      parentCategory: ''
    }
  }

  $scope.getSubcats = function(){
    $http.get('api/v1/subcategories/all').
      success(function(data, status, headers, config) {
        $scope.subCategories = data;
      }).
      error(function(data, status, headers, config) {
        console.log('error');
        console.log(data);
      });
  }

  $scope.submitNewPost = function(){
    var message = {
      title: $scope.post.title,
      url: $scope.post.url,
      subcat_id: CurrentCategory.subCategoryId,
    }

    $http.post('api/v1/submit', message).
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
      { category: $scope.post.subcat.parentCategory,
        subcategory: $scope.post.subcat.subcategory
      });
  }

  $scope.getSubcats();

});
