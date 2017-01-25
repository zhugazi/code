// JavaScript Document
//注册一个module ，继承  //module
var myMoudle = angular.module("MyModule",[]);
//定义一个指令：directive 指令
myMoudle.directive("hello",function(){
		//json 指定的指令声明方式
		return {
				restrict: 'E', //element
				template: '<div>aaaa<p>aaa</p>aaaa</div>',
				replace:true //替换
		}
})

