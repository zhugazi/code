// JavaScript Document

$(function(){
	//tab1.js
	$(".h_tab_tit li").click(function(){
		$(this).addClass("h_tab_s").siblings().removeClass();//当前对象添加类名tab_s,其他移除。
		$(".h_tab_con ul").hide().eq($(".h_tab_tit li").index(this)).show();
		var $ul = $(".h_tab_con ul");
		var $cons = $(".h_tab_con ul");
		var index = $(this).index();
		$ul.hide().eq(index).show();
		$cons.removeClass("h_tab_cons").eq(index).addClass("h_tab_cons");
	});
	//tab2.js
	

});