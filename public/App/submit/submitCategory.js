angular.module('fount.submitCategory', [])

.controller('SubmitCategoryController', function($scope, $http, $state){

  $scope.name = "";
  $scope.url = "";

  $scope.createCategory = function(){
    var message = {
      name : $scope.name,
      img : $scope.url
    }

    $http.post('api/v1/submit/category', message).then(function(results){
      console.log(results);
    });

    $state.go("app.categories");
  }
});
