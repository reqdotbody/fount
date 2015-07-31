angular.module('fount.helpers', [])


.service('CurrentCategory', function(){
  var currentCategory = '';
  var currentSubCategory = '';
  var currentSubCategoryId = null;

  return {
    category : currentCategory,
    subCategory : currentSubCategory,
    subCategoryId : currentSubCategoryId,
  }
})

.factory('AuthFactory', function($http){
  var authStatus = {
    isLoggedIn: false
  }
  var getAuth = function(){
    $http.get('/checkAuth').then(function(results){ authStatus.isLoggedIn = results.data });
  }
  return {
    authStatus : authStatus,
    getAuth : getAuth
  }
});