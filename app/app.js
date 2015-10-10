var app = angular.module('myApp', [
		'ngRoute',
		'bookService',
		'mainCtrl',
		'bookCtrl'
	])
	.config([
		'$routeProvider',

		function ($routeProvider) {
			'use strict';

			$routeProvider
				.when('/', {
					redirectTo: '/main'
				})
				.when('/main', {
					controller: 'MainCtrl',
					templateUrl: 'views/main.html'
				})
				.when('/book/:id', {
					controller: 'BookCtrl',
					templateUrl: 'views/book.html'
				})
				.otherwise({
					redirectTo: '/main'
				});
		}
	]);
