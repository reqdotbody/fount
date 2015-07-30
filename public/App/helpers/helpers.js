angular.module('fount.helpers', [])


.service('CurrentCategory', function(){
  var currentCategory = '';

  return {
    category : currentCategory
  }
})