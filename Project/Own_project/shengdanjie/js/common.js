$(function(){
	
	var zheH=$(document).height();
	$("#Christmas_zhe").css({"height":zheH,"display":"block"});
	
	$(".Christmas_popBox .cha_2").on("click",function(){
		$(".Christmas_popBox").css({"display":"none"})
		$("#Christmas_zhe").css("display","none");
	})
	$(".Father_Christmas").on("click",function(){
		location.href="http://www.ishoutou.com/freestock/index"
	})
	
})









