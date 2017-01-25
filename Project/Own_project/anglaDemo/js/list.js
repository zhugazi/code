var Ctrldemo=angular.module("Ctrldemo",[]);
Ctrldemo.controller("HelloCtrl",function($scope){
	$scope.greeting={
		text:"你好嘎子",
		url:"index.html#/"
	}
})
Ctrldemo.controller("listCtrl",function($scope){
	$scope.books=[
		{title:"完美世界",zuozhe:"辰东"},
		{title:"傲世九重天",zuozhe:"风凌天下"},
		{title:"武破乾坤",zuozhe:"天蚕土豆"},
		{title:"长生界",zuozhe:"辰东"},
		{title:"遮天",zuozhe:"辰东"},
		{title:"异世邪君",zuozhe:"风凌天下"},
		{title:"大主宰",zuozhe:"天蚕土豆"}
		
	];
})
