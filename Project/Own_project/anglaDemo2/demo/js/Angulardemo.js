//现制定一个
var Angulardemo=angular.module("Angulardemo",['ngRoute','myCtrl']);
Angulardemo.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl:'tpls/hello.html',
		controller:'helloCtrl'
	}).when('/list',{
		templateUrl:'tpls/list.html',
		controller:'listCtrl'
	}).otherwise({
		redirectTo:'/hello'
	});
})
















