angular.module('fount', [
  'fount.services',
  'fount.auth',
  'fount.category',
  'fount.results',
  'fount.subcategory', 
  'fount.search',
  'fount.nav',
  'ui.router'
  ])
//add other modules as are created for view

.controller("MainController", function($scope){
    $scope.searchForm = "";
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/all');

  $stateProvider
    //CHANGE URL PATH NAMES
    .state('signup', {
      url: '/signup',
      templateUrl: '/app/auth/sign_up_view.html',
      controller: 'AuthController'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: '/app/auth/sign_in_view.html',
      controller: 'AuthController'
    })
    .state('logout', {
      url: '/logout',
      templateUrl: '/app/categories/categories_view.html',
      controller: 'CategoryController'
    })
    .state('categories', {
      url: '/all',
      templateUrl: '/app/categories/categories_view.html',
      controller: 'CategoryController'
    })
    .state('search', {
      url: '/search/{keyword}',
      templateUrl: '/app/search/search.html',
      controller: 'SearchController'
    })
    .state('categories.subcategories', {
      url: '/{category}',
      templateUrl: '/app/subcategories/subcategories_category_view.html',
      controller: 'SubcategoryController',
    })
    .state('categories.subcategories.results', {
      url: '/{subcategory}',
      templateUrl: '/app/results/results_view.html',
      controller: 'ResultsController'
    });
    

   // $locationProvider.html5Mode(true);
}]);