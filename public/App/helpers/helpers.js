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