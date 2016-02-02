var app = angular.module('movieApp', ['ngRoute']);

	app.config(function($routeProvider,$locationProvider){
		$routeProvider
		.when('/', {
			templateUrl: "partials/landingPage.html",
			controller: 'mainController'
		})
		.when('/:movieId/result', {
			templateUrl: "partials/result.html",
			controller: 'secondController'
		})
	});