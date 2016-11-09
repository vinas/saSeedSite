var app = angular.module('saSeed', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(false);
		$routeProvider
			.when('/', {
				redirectTo: '/home'
			})
			.when('/home', {
				templateUrl: 'templates/home.html'
			})
			.when('/why-saseed', {
				templateUrl: 'templates/why-saseed.html'
			})
			.when('/download', {
				redirectTo: '/home'
			})
			.when('/install', {
				templateUrl: 'templates/install.html',
				controller: 'installController'
			})
			.when('/install/:id', {
				templateUrl: 'templates/install.html',
				controller: 'installController'
			})
			.when('/documentation', {
				templateUrl: 'templates/documentation.html',
				controller: 'docController'
			})
			.when('/documentation/:id', {
				templateUrl: 'templates/documentation.html',
				controller: 'docController'
			})
			.when('/contact', {
				templateUrl: 'templates/contact.html'
			})
			.when('/admin', {
				templateUrl: 'templates/admin.html',
				controller: 'adminController'
			})
			.when('/admin/form/:id', {
				templateUrl: 'templates/admin-form.html',
				controller: 'adminController',
				loadables: true
			})
			.when('/admin/form', {
				templateUrl: 'templates/admin-form.html',
				controller: 'adminController',
				loadables: true
			})
			.otherwise({
				redirectTo: '/home'
			});
	}]);
