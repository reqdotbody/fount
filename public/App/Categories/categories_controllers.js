angular.module('fount.category', [])

.controller('CategoryController', function ($scope, $http, $window, $location, CurrentCategory){

  console.log(CurrentCategory.category);
  $scope.categories = [];

  $scope.getCategories = function(){
    // setInterval(function() {
    //   $http.get('/myfollows')
    //   .success(function(data) {
    //     console.log(data);
    //   })
    //   .error(function(data) {
    //     console.log('error', data);
    //   })
    // }, 1000);

    // Simple GET request example
    $http.get('api/v1/categories').
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.categories = data;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('error');
        console.log(data);
      });
  }

  $scope.updateCategory = function(categoryObj){
    CurrentCategory.category = categoryObj.category;
  }

  $scope.getCategories();

  $scope.animate = function(index){ 
    var pointer = angular.element('#cat'+index)
    // console.log(pointer.attr('class'))
      .removeClass('fadeIn')
      .addClass('animated pulse infinite');
  }

  $scope.deanimate = function(index){
    angular.element('#cat'+index).removeClass('animated pulse');
  }

  $scope.catId = function(index){
    return "cat" + index;
  }

  $scope.initAnimate = function(index){
    // console.log(index);
    var pointer = angular.element('#cat'+index).removeClass('animated fadeIn')
  }
});
