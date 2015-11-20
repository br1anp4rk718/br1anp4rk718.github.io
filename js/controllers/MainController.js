var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'TEST';
	$scope.products = [
	{
		name: 'Version Control',
		likes: 0
	},
	{
		name: 'Classes vs IDs',
		likes: 0
	},
	{
		name: 'Comparing Arrays and Hashes',
		likes: 0
	},
	{
		name: 'Enumerable Methods',
		likes: 0
	},
	{
		name: 'Ruby CLasses!',
		likes: 0
	},
	{
		name: 'OOP Concepts',
		likes: 0
	},
	{
		name: 'For and While loops in Javascript vs Ruby',
		likes: 0
	},
	{
		name: 'Tech Blog',
		likes: 0
	}
	];
	$scope.plusOne = function(index) {
		$scope.products[index].likes +=1;
	}
}])