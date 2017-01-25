// JavaScript Document
// 2 个控制器：
function comController($scope){
	$scope.conFun = function(){
		alert("罗伟霞 真棒");	
	}
}
function controller1($scope){
		$scope.greeting = {
			text:"xupengfei zhen shuai"	
		}
		$scope.test1 = function(){
			 alert("李孔孔");	 //图片轮播
		}
}
function controller2($scope){
		$scope.greeting = {
			text:"guoming zhen piaoliang"	
		}
		$scope.test2 = function(){
			alert("嘎子");
		}
}