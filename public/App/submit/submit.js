angular.module('fount.submit', [])

.controller('SubmitController', function($scope, $http){
  $scope.subcategories = [];

  $scope.subCat = '';

  $scope.getSubcats = function(){
    $http.get('api/v1/subcategories/all').
      success(function(data, status, headers, config) {
        $scope.subcategories = data;
      }).
      error(function(data, status, headers, config) {
        console.log('error');
        console.log(data);
      });
  }

  $scope.getSubcats();

});
