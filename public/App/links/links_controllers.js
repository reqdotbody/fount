angular.module('fount.links', [])

.controller('linksController', function($scope, $http){
  $scope.link = [
    { title: title },
    { url: url },
    { username: username },
    { subcategory: subcategory }
  ]

   $scope.addLink = function (link) {
  	return $http({
  		method: 'POST',
      title: { title: title },
  		url: { url: url },
      username: { username: username },
      subcategory_id: { subcategory_id: subcategory_id }
  	})
  }

});
