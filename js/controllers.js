app.controller('mainController', function($scope,$http){

	$scope.movie = 'star'

	$http.get('http://www.omdbapi.com/?s=' + $scope.movie + '&plot=short&r=json')
		.then(function(response){
			$scope.data = response.data
		})
})