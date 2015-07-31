angular.module('fount.subcatSearch', [])

.controller('SubcategorySearchController', function($scope, $http, $stateParams, $rootScope){

  $scope.subcategories = [];

  $scope.getAllSubcategories = function(){
    $http.get('api/v1/subcategories/all').
      success(function(data, status, headers, config) {
        $scope.subcategories = data;
      }).
      error(function(data, status, headers, config) {
        console.log('error');
        console.log(data);
      });
  }

  $scope.getAllSubcategories();

  $scope.emptySearchForm = function(){
    $rootScope.searchForm = "";
  }
});
