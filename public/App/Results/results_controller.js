angular.module('fount.results', [])

.controller('ResultsController', function($scope, $window, $location){

  $scope.results = [

    {
    title: "Awesome JS tutorial",
    url: "www.google.com",
    votes: 4,
    username: "estebanCastano",
    date: "Dec 27, 1990",
    id: "test"
    },

     {
    title: "Awesome JS tutorial",
    url: "www.google.com",
    votes: 7,
    username: "estebanCastano",
    date: "Dec 27, 1990",
    id: "test",
    },

    {
      title: "Neat JS tutorial",
      url: "www.apple.com",
      votes: 2,
      username: "isto",
      date: "Dec 27, 1990",
      id: "test"
    }

   

  ];
  
});


