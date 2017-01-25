/*var myapp=angular.module("myapp",[]);*/
myapp.controller("Myfor",function($scope){
	$scope.master={firstName:'朱鹏辉',lastName:'张娜'};
	$scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
})





