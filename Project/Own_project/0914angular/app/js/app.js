// JavaScript Document
//定义一个路由功能
var bookStoreApp = angular.module("bookStoreApp",['ngRoute','ngAnimate']);
//定义路由功能：
bookStoreApp.config(function($routeProvider){
	//hello.html    list.html	
	// when 在满足条件后转向的地址，when都不行  启动otherwise();
	$routeProvider.when().when().when().....otherwise();
})


