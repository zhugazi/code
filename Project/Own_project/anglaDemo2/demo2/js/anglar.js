var anglar=angular.module("anglar",[]);
anglar.controller("ajaxdemo",['$scope','$http',function($scope,$http){
	
	 $http({
	 	method:'GET',
	 	url:'tpls/data.json'
	 	
	 }).success(function(data,status,header,config){
	 	 $scope.users=data;
	 }).error(function(){
	 	document.write(3333);
	 })
}])
