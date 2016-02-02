angular.module('movieApp').controller('mainController', function($scope, $http){

	$scope.movieSearch = function () {
		$http.get('http://www.omdbapi.com/?s=' + $scope.title + '&plot=short&r=json')
		.then(function(response){
			console.log(response.data)
			$scope.data = response.data.Search
		})
}

	$scope.update = function(movie){
		$scope.search = movie.title;
	};

	$scope.select = function(){
		this.setSelectionRange(0, this.value.length);
	}
})

