var myapp=angular.module("myapp",[]);
myapp.controller("myctr",function($scope){
	$scope.count=0;
	$scope.play=function(){
		$scope.count++;
	};
})
