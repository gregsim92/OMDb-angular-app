app.controller('mainController', function($scope,$http,$location){

	$scope.movieSearch = function () {
		$http.get('http://www.omdbapi.com/?s=' + $scope.title + '&plot=short&r=json')
		.then(function(response){
			console.log(response.data)
			$scope.data = response.data.Search
		})
	}

	$scope.movieResult = function(id){
		$http.get('http://www.omdbapi.com/?i=' + id).then(function(response){
			$scope.foo = response.data;
			$scope.foo1 = id;
			$location.path("/" + id + '/result')
		})
	}

})

app.controller('secondController', function($http,$scope,$location){
	$scope.movieId = $location.$$path.split('/')[1];

	$http.get('http://www.omdbapi.com/?i=' + $scope.movieId)
		.then(function(response){
			console.log(response.data)
			$scope.result = response.data;
		})



})
