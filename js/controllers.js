app.controller('mainController', function($scope,$http){

	$scope.movie = 'star'

	$http.get('http://www.omdbapi.com/?t=' + $scope.movie + '&plot=short&r=json')
		.then(function(response){
			$scope.data = response.data
		})
})