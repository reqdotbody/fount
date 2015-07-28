angular.module('fount.createCategory', [])

.controller('CreateCategoryController', function($scope, $http, $state){

  $scope.name = "";
  $scope.url = "";

  $scope.createCategory = function(){
    var message = {
      name : $scope.name,
      image : $scope.url
    }

    $http.post('api/v1/submit/category', message).then(function(results){
      console.log(results);
    });

    $state.go("app.categories");
  }
});
