//QUERY CONTROLLERS
angular.module('fount.subcategory', [])

.controller('SubcategoryController', function($scope, $window, $location, $http){
  $scope.subcategories = [
    { name: "Angular", cat_id: 1 },
    { name: "Javascript", cat_id: 1 },
    { name: "Git", cat_id: 1 },
    { name: "CSS", cat_id: 1 },
    { name: "HTML", cat_id: 1 },
    { name: "Mithril", cat_id: 1 },
    { name: "South Asian History", cat_id: 2 },
    { name: "Renaissance", cat_id: 2 },
    { name: "World War II", cat_id: 2 },
    { name: "Russian History", cat_id: 2 }
  ]

   var addSubcategory = function (subcategory) {
  	return $http({
  		method: 'POST',
  		name: { name: name },
  		cat_id: { cat_id: cat_id },
  		url: '/#/' + { Category } + '/' + { subcategory }
  	})
  }

});
