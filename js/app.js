var app = angular.module('movieApp', ['ngRoute']);

	app.config(function($routeProvider,$locationProvider){
		$routeProvider
		.when('/', {
			templateUrl: "partials/landingPage.html",
			controller: 'mainController'
		})
	});