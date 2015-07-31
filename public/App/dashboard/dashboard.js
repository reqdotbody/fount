angular.module('fount.dashboard', [])

.controller('DashboardController', function($scope, $http){

  $scope.mySubCategories = [];

  $scope.myFollows = function(){
    $http({
      url : '/myfollows',
      method: 'GET',
    }).then(function(subCategories){
      // console.log(subCategories.data);
      $scope.mySubCategories = subCategories.data;
    })
  };

  $scope.myFollows();
});
