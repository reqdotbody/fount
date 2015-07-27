angular.module('fount.category', [])

.controller('CategoryController', function($scope, $http, $window, $location){
  
  ////////////////
  // Filler data
  ////////////////

  // $scope.categories = [
  //   {
  //     name: "Tech",
  //     img: "http://cdn.radiolive.co.nz/radiolive/AM/2014/12/21/67690/tech-advances-dance-music.jpg"
  //   },
  //   {
  //     name: "History",
  //     img: "http://www.strangenotions.com/wp-content/uploads/History.jpg"
  //   },
  //   {
  //     name: "Economics & Finance",
  //     img: "http://www.motherjones.com/files/wall_st_bull_0.jpg"
  //   },
  //   {
  //     name: "Art & Literature",
  //     img: "http://afremov.com/image.php?type=P&id=18749"
  //   },
  //   {
  //     name: "Natural Sciences",
  //     img: "http://www.interfaithcounselling.ca/wp-content/uploads/2014/01/Tree-111.jpg"
  //   },
  //   {
  //     name: "Sports & Leisure",
  //     img: "http://www.panorak.com/images/body-bg-water.jpg"
  //   },
    
  // ]

  ////////////////////
  // Data from server
  ////////////////////

  $scope.categories = [];

  $scope.getCategories = function(){
    // Simple GET request example :
    $http.get('/api/v1/categories').
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


  $scope.getCategories();





});
