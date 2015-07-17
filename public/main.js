angular.module('fount', [
  'fount.services',
  'fount.auth',
  'fount.category',
  'fount.results',
  'fount.subcategory', 
  'fount.search',
  'fount.nav',
  'ngRoute',

  ])
//add other modules as are created for view

.controller("MainController", function($scope){
  
})

.config(['$routeProvider', function($routeProvider, $httpProvider, $locationProvider){
  $routeProvider
    //CHANGE URL PATH NAMES
    .when('/signup', {
      templateUrl: '/app/auth/sign_up_view.html',
      controller: 'AuthController'
    })
    .when('/signin', {
      templateUrl: '/app/auth/sign_in_view.html',
      controller: 'AuthController'
    })
    .when('/logout', {
      templateUrl: '/app/categories/categories_view.html',
      controller: 'CategoryController'
    })
    .when('/categories', {
      templateUrl: '/app/categories/categories_view.html',
      controller: 'CategoryController'
    })
    .when('/search/{keyword}', {
      templateUrl: '/app/subcategories/subcategories_category_view.html',
      controller: 'SubcategoryController'
    })
    .when('/{Category}', {
      templateUrl: '/app/subcategories/subcategories_searchbar_view.html',
      controller: 'SubcategoryController'
    })
    .when('/{Category}/{Subcategory}', {
      templateUrl: '/app/subcategories/results_view.html',
      controller: 'FountController'
    })
    .otherwise({
      redirectTo: '/categories'
    });

   // $locationProvider.html5Mode(true);
}]);