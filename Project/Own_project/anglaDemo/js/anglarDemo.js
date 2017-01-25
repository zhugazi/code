/*function demo($scope){
	$scope.greeting={
		text:"朱鹏辉"
	}
	$scope.dian=function(){
		alert("gongqingyun")
	}
}
function dademo($scope){
	$scope.greeting={
		text:"Mc小辉"
	}
	$scope.name={
		text:"Mc嘎哥"
	}
	
}
var angulardemo=angular.module("Angulardemo",[]);
angulardemo.controller("demo1",["$scope",function($scope){
	$scope.greeting={
		text:"嘎子"
	}
}])

function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
}*/

/*var mydemo=angular.module("Angulardemo",[]);
mydemo.directive("hello",function(){
	return{
		restrict:'E',
		template:'<div><P>444</P><P>555</P></div>',
		replace:true
	}
})*/

var luyou=angular.module("Angulardemo",['ngRoute','Ctrldemo']);
luyou.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl:'tpls/hello.html',
		controller:'HelloCtrl'
	}).when('/list',{
		templateUrl:'tpls/list.html',
		controller:'listCtrl'
	}).otherwise({
		redirectTo:'/hello'//强制转换，又叫默认
	});
})



