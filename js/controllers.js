app.controller('mainController', function($scope,$http){

	$scope.movie = 'star'

	$http.get('http://www.omdbapi.com/?' + $scope.movie)
})