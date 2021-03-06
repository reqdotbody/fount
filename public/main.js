angular.module('fount', [
  'fount.services',
  'fount.auth',
  'fount.category',
  'fount.results',
  'fount.subcategory', 
  'fount.search',
  'fount.nav',
  'fount.content',
  'fount.submitPost',
  'fount.submitSubcat',
  'fount.subcatSearch',
  'ui.router'
  ])
//add other modules as are created for view

.controller("MainController", function($scope, $rootScope){
    $rootScope.searchForm = "";
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/all');

  $stateProvider
    //CHANGE TEMPLATE URL PATH NAMES DUE TO CASE DISCREPANCY
    .state('app', {
      abstract: true,
      views: {
        nav: {
          templateUrl: '/app/nav/nav.html',
          controller: 'NavController as Nav'
        },

        '': {
          templateUrl: '/app/content.html',
          controller: 'ContentController as Content'
        },

        subcatSearch: {
          templateUrl: '/app/subcategories/subcategories_searchbar_view.html',
          controller: 'SubcategorySearchController as SubCatSearch'
        }
      }
    })
    .state('app.signup', {
      url: '/signup',
      templateUrl: '/app/auth/sign_up_view.html',
      controller: 'AuthController'
    })
    .state('app.signin', {
      url: '/signin',
      templateUrl: '/app/auth/sign_in_view.html',
      controller: 'AuthController'
    })
    .state('app.logout', {
      url: '/logout',
      templateUrl: '/app/categories/categories_view.html',
      controller: 'CategoryController'
    })
    .state('app.submitSubcat', {
      url: '/submit-subcategory',
      templateUrl: '/app/submit/submitSubcat.html',
      controller: 'SubmitSubcatController'
    })
    .state('app.submitPost', {
      url: '/submit-post',
      templateUrl: '/app/submit/submitPost.html',
      controller: 'SubmitPostController'
    })
    .state('app.search', {
      url: '/search/{keyword}',
      templateUrl: '/app/search/search.html',
      controller: 'SearchController'
    })
    .state('app.categories', {
      url: '/all',
      templateUrl: '/app/categories/categories_view.html',
      controller: 'CategoryController'
    })
    .state('app.categories.subcategories', {
      url: '/{category}',
      templateUrl: '/app/subcategories/subcategories_category_view.html',
      controller: 'SubcategoryController',
    })
    .state('app.categories.subcategories.results', {
      url: '/{subcategory}',
      templateUrl: '/app/results/results_view.html',
      controller: 'ResultsController'
    });
}]);