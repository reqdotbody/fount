angular.module('fount', [
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
  'fount.submitCategory',
  'fount.dashboard',
  'ui.router'
  ])
//add other modules as are created for view

.controller("MainController", function($scope, $rootScope){
    $rootScope.searchForm = "";
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider.state('index', {
    url: '/',
    views: {
      jumbo: { 
        templateUrl: 'app/search/search.html',
        controller: 'MainController'
      },
      content: {
        templateUrl: 'app/Categories/categories_view.html',
        controller: 'CategoryController'
      }
    }
  })
  .state('index.submitPost', {
    url: 'submit-post',
    templateUrl: '/app/submit/submitPost.html',
    controller: 'SubmitPostController'
  })
  .state('index.submitSubcat', {
    url: '/submit-subcategory',
    templateUrl: '/app/submit/submitSubcat.html',
    controller: 'SubmitSubcatController'
  })
  .state('index.submitCategory', {
    url: '/all',
    templateUrl: '/app/submit/submitCategory.html',
    controller: 'SubmitCategoryController'
  })
  .state('index.signup', {
    url: '/signup',
    templateUrl: '/app/auth/sign_up_view.html',
    controller: 'AuthController'
  })
  .state('index.signin', {
    url: '/signin',
    templateUrl: '/app/auth/sign_in_view.html',
    controller: 'AuthController'
  })



  // $urlRouterProvider.otherwise('/all');
  // $stateProvider
  //   //CHANGE TEMPLATE URL PATH NAMES DUE TO CASE DISCREPANCY
  //   .state('app', {
  //     abstract: true,
  //     views: {
  //       nav: {
  //         templateUrl: '/app/nav/nav.html',
  //         controller: 'NavController as Nav'
  //       },
  //       '': {
  //         templateUrl: 'app/mainPage/mainPage.html'   
  //       }
  //     }
  //   })
  //   .state('app.dashboard', {
  //     url : '/dashboard',
  //     templateUrl : 'app/dashboard/dashboard.html',
  //     controller : 'DashboardController'
  //   })
  //   .state('app.mainPage', {
  //     abstract: true,
  //     views: {
  //       '' : {
  //         templateUrl: 'app/content.html',
  //         controller: 'ContentController as Content',
  //       },
  //       subcatSearch: {
  //         templateUrl: 'app/subcategories/subcategories_searchbar_view.html',
  //         controller: 'SubcategorySearchController as SubCatSearch'
  //       }
  //     }
  //   })
  //   .state('app.mainPage.signup', {
  //     url: '/signup',
  //     templateUrl: '/app/auth/sign_up_view.html',
  //     controller: 'AuthController'
  //   })
  //   .state('app.mainPage.signin', {
  //     url: '/signin',
  //     templateUrl: '/app/auth/sign_in_view.html',
  //     controller: 'AuthController'
  //   })
  //   .state('app.mainPage.logout', {
  //     url: '/logout',
  //     templateUrl: '/app/categories/categories_view.html',
  //     controller: 'CategoryController'
  //   })
  //   .state('app.mainPage.submitSubcat', {
  //     url: '/submit-subcategory',
  //     templateUrl: '/app/submit/submitSubcat.html',
  //     controller: 'SubmitSubcatController'
  //   })
  //   .state('app.mainPage.submitPost', {
  //     url: '/submit-post',
  //     templateUrl: '/app/submit/submitPost.html',
  //     controller: 'SubmitPostController'
  //   })
  //   .state('app.mainPage.search', {
  //     url: '/search/{keyword}',
  //     templateUrl: '/app/search/search.html',
  //     controller: 'SearchController'
  //   })
  //   .state('app.mainPage.categories', {
  //     url: '/all',
  //     templateUrl: '/app/categories/categories_view.html',
  //     controller: 'CategoryController'
  //   })
  //   .state('app.mainPage.categories.subcategories', {
  //     url: '/{category}',
  //     templateUrl: '/app/subcategories/subcategories_category_view.html',
  //     controller: 'SubcategoryController',
  //   })
  //   .state('app.mainPage.categories.subcategories.results', {
  //     url: '/{subcategory}',
  //     templateUrl: '/app/results/results_view.html',
  //     controller: 'ResultsController'
  //   })
  //   .state('app.mainPage.createCategory', {
  //     url: '/create-category',
  //     templateUrl: '/app/submit/createCategory.html',
  //     controller: 'CreateCategoryController'
  //   })
}]);