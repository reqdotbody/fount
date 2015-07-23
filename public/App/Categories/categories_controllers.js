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
    },
    {
      name: "Economics & Finance",
      img: "http://www.motherjones.com/files/wall_st_bull_0.jpg"
    },
    {
      name: "Art & Literature",
      img: "http://afremov.com/image.php?type=P&id=18749"
    },
    {
      name: "Natural Sciences",
      img: "http://www.interfaithcounselling.ca/wp-content/uploads/2014/01/Tree-111.jpg"
    },
    {
      name: "Sports & Leisure",
      img: "http://www.panorak.com/images/body-bg-water.jpg"
    },
    
  ]



});
