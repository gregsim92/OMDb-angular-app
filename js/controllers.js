app.controller('mainController', function($scope,$http){

	$scope.movieSearch = function () {
		$http.get('http://www.omdbapi.com/?s=' + $scope.title + '&plot=short&r=json')
		.then(function(response){
			console.log(response.data)
			$scope.data = response.data.Search
		})
}

})