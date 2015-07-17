angular.module('fount', [
  'fount.services',
  'fount.auth',
  'fount.category',
  'fount.results',
  'fount.subcategory',  
  'ngRoute',
  ])
//add other modules as are created for view

.controller("MainController"), function($scope){
  
}

.config(function($routeProvider, $httpProvider){
  $routeProvider
    //CHANGE URL PATH NAMES
    .when('/signup', {
      templateUrl: '/App/Auth/sign_up_view.html'
      controller: 'AuthController'
    })
    .when('/signin', {
      templateUrl: '/App/Auth/sign_in_view.html'
      controller: 'AuthController'
    })
    .when('/logout', {
      templateUrl: '/App/Categories/categories_view.html'
      controller: 'CategoryController'
    })
    .when('/categories', {
      templateUrl: '/App/Categories/categories_view.html'
      controller: 'CategoryController'
    })
    .when('/search/{keyword}', {
      templateUrl: '/App/Subcategories/subcategories_category_view.html'
      controller: 'SubcategoryController'
    })
    .when('/{Category}', {
      templateUrl: '/App/Subcategories/subcategories_searchbar_view.html'
      controller: 'SubcategoryController'
    })
    .when('/{Category}/{Subcategory}', {
      templateUrl: '/App/Subcategories/results_view.html'
      controller: 'FountController'
    })
    .otherwise({
      redirectTo: '/categories'
    })
})