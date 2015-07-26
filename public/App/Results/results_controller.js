angular.module('fount.results', [])

.controller('ResultsController', function($scope, $http, $window, $location, $stateParams){


  $scope.results = [];
  console.log("stateParams");
  console.log($stateParams);
  $scope.category = $stateParams.category;
  $scope.subcategory = $stateParams.subcategory;

  $scope.getResults = function(){
    // Simple GET request :
    console.log($scope.category);
    console.log($scope.subcategory);
    console.log('http://localhost:3000/api/v1/' + $scope.category + '/' + $scope.subcategory);

    $http.get('http://localhost:3000/api/v1/' + $scope.category + '/' + $scope.subcategory).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.results = data;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('error');
        console.log(data);
      });
  }

  $scope.getResults();


  // Toggles the 'visited' class
  $scope.class = "unvisited";
  
  $scope.changeClass = function(){
      if ($scope.class === "unvisited")
          $scope.class = "visited";
  };
  
});


  // $scope.results = [
  //   {
  //   title: "Awesome JS tutorial",
  //   url: "http://www.google.com",
  //   votes: 4,
  //   username: "estebanCastano",
  //   date: "Dec 27, 1990",
  //   id: "test"
  //   },
  //    {
  //   title: "Awesome JS tutorial",
  //   url: "www.google.com",
  //   url: "http://www.google.com",
  //   votes: 7,
  //   username: "estebanCastano",
  //   date: "Dec 27, 1990",
  //   id: "test",
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test",
  //   },
  //   {
  //     title: "Applez lmao",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
  //   {
  //     title: "A Mithril Tutorial -- build a sample to-do app",
  //     url: "http://gilbert.ghost.io/mithril-js-tutorial-1/", 
  //     votes: 20,
  //     username: "farhana",
  //     date: "Dec 27, 2015",
  //     id: "test"
  //   },
  //   {
  //     title: "Neat JS tutorial",
  //     url: "http://www.apple.com",
  //     votes: 2,
  //     username: "isto",
  //     date: "Dec 27, 1990",
  //     id: "test"
  //   },
    
  // ];
