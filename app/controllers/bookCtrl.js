angular.module('bookCtrl', [])
	.controller('BookCtrl', [
		'$scope',
		'BookService',
		function ($scope, BookService) {
			'use strict';
			console.log('Book ctrl');

			$scope.init = function () {
				$scope.getBook();
			};

			$scope.getBook = function () {
				BookService.getBook()
					.then(function () {
						// Success
						$scope.book = BookService.book;
						console.log(BookService.book);
					}, function () {
						// Error
					});
			};


			$scope.init();
		}
	]);
