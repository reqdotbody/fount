//QUERY CONTROLLERS
angular.module('fount.subcategory', [])

.controller('SubcategoryController', function($scope, $http){
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
    { name: "Russian History", cat_id: 2 },
    { name: "Entrepreneurship", cat_id: 3 },
    { name: "Finance and Capital Markets", cat_id: 3 },
    { name: "Personal Fiance", cat_id: 3 },
    { name: "Economics 101", cat_id: 3 },
    { name: "Trade", cat_id: 3 },
    { name: "Theater", cat_id: 4 },
    { name: "Writing 101", cat_id: 4 },
    { name: "Biology", cat_id: 5 },
    { name: "Kayaking", cat_id: 6 },
    { name: "Mountaineering", cat_id: 6 },
    { name: "Rock Climbing", cat_id: 6 }
  ]

//Method for user to add subcategory to a category
   $scope.addSubcategory = function (subcategory) {
  	return $http({
  		method: 'POST',
  		name: { name: subcategory },
  		cat_id: { cat_id: cat_id },
  		url: '/#/' + { categories.name } + '/' + { subcategories.name }
  	})
  }

});
