var myCtrl=angular.module("myCtrl",[]);
myCtrl.controller("helloCtrl",function($scope){
	$scope.greeting={
		url:"index.html#",
		text:"朱鹏辉"
	}
})
myCtrl.controller("listCtrl",function($scope){
	$scope.greeting={
		url:"index.html#",
	},
	$scope.books=[
		{shu:"完美世界",zuo:"辰东"},
		{shu:"长生界",zuo:"辰东"},
		{shu:"遮天",zuo:"辰东"},
		{shu:"大主宰",zuo:"天蚕土豆"},
		{shu:"武动乾坤",zuo:"天蚕土豆"},
		{shu:"傲世九重天",zuo:"风凌天下"},
		{shu:"凌天传说",zuo:"风凌天下"},
		{shu:"凡人修仙传",zuo:"忘语"}
	]
})



