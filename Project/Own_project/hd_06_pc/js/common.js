// JavaScript Document

//通用弹出层触发动作 begin
function showPop(id,className){
  $(".bgIframe").css({
	  "filter":"alpha(opacity=0)",
	  "opacity":"0"
	  });
  $(".bgDiv").css({
	  "filter":"alpha(opacity=50)",
	  "opacity":"0.5"
	  });  
  $(id).addClass(className).fadeIn(10,function(){
	  	var	popHeight = $(''+id+'.popWrap,'+id+' .popWrap_sub,'+id+' .popIframe');
		var h=$(''+id+' .popBox').height();//获取高度
		popHeight.height(h);
		$(".bgIframe,.bgDiv").fadeIn(200);
	  });
   return false;	  
}
	  
//关闭弹层窗口
function hidePop(id,className){
	$(''+id+',.bgIframe,.bgDiv').fadeOut(function(){
		   $(this).removeClass(className);
		   $(''+id+'.popWrap,'+id+' .popWrap_sub,'+id+' .popIframe').height('');
		})
}
//---------- end

$(function(){
	/*if($(window).scrollTop()>530){
			$(".dcb_xuanfu").show();
		}else{
			$(".dcb_xuanfu").hide();
		}
	$(window).on("scroll",function(){
		if($(this).scrollTop()>530){
			$(".dcb_xuanfu").show();
		}else{
			$(".dcb_xuanfu").hide();
		}
	})*/
	
	$(".oul1>li").on("mouseover",function(){
		$(this).addClass("on");
	}).on("mouseout",function(){
		$(this).removeClass("on");
	})
	$("#returnTop").on("click",function(){
		location.href="#actOne";
	})
	
	
})








