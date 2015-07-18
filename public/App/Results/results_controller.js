angular.module('fount.results', [])

.controller('ResultsController', function($scope, $window, $location){

  $scope.results = [

    {
    title: "Awesome JS tutorial",
    url: "http://www.google.com",
    votes: 4,
    username: "estebanCastano",
    date: "Dec 27, 1990",
    id: "test"
    },

     {
    title: "Awesome JS tutorial",
    url: "http://www.google.com",
    votes: 7,
    username: "estebanCastano",
    date: "Dec 27, 1990",
    id: "test",
    },

    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },

    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },

    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    {
      title: "A Mithril Tutorial -- build a sample to-do app",
      url: "http://gilbert.ghost.io/mithril-js-tutorial-1/",
      votes: 20,
      username: "farhana",
      date: "Dec 27, 2015",
      id: "test"
    },
    {
      title: "Neat JS tutorial",
      url: "http://www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    },
    
  ];

  // Toggles the 'visited' class
  $scope.class = "unvisited";
  
  $scope.changeClass = function(){
      if ($scope.class === "unvisited")
          $scope.class = "visited";
  };
  
});


