<<<<<<< HEAD
angular.module('movieApp').controller('mainController', function($scope, $http){
=======
app.controller('mainController', function($scope,$http,$location){
>>>>>>> ef0eafa62392cae8b34157d7029b5096679e263c

	$scope.movieSearch = function () {
		$http.get('http://www.omdbapi.com/?s=' + $scope.title + '&plot=short&r=json')
		.then(function(response){
			console.log(response.data)
			$scope.data = response.data.Search
		})
	}

<<<<<<< HEAD
	$scope.update = function(movie){
		$scope.search = movie.title;
	};

	$scope.select = function(){
		this.setSelectionRange(0, this.value.length);
	}
})

=======
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
>>>>>>> ef0eafa62392cae8b34157d7029b5096679e263c
