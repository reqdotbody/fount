angular.module('fount.category', [])

.controller('CategoryController', function($scope, $window, $location){
  $scope.categories = [
    {
      name: "Tech",
      img: "http://cdn.radiolive.co.nz/radiolive/AM/2014/12/21/67690/tech-advances-dance-music.jpg"
    },
    {
      name: "History",
      img: "http://www.strangenotions.com/wp-content/uploads/History.jpg"
    }
  ]

});
