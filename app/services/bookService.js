angular.module('bookService', [])
	.service('BookService', ['$http', '$q',
		function ($http, $q) {
			'use strict';
			var book = this;
			book.book = {};

			book.getBook = function () {
				var url = 'data/martian-en.json',
					defer = $q.defer();
				$http.get(url)
					.success(function (data) {
						book.book = data;
						defer.resolve(data);
					})
					.error(function (data) {
						defer.reject({
							error: 'api access [%s] error!'.replace('%s', url)
						});
					});

				return defer.promise;
			};

			return book;
		}
	]);
