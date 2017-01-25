$(function(){
	//项目通用颜色
	$(".index_zxList li,.index_noticeList dl,#listPage tr,.noticeList li,.joinAction tr,.huiBg tr").on("touchstart",function(){
		$(this).css("background","#eee");
	}).on("touchend",function(){
		$(this).css("background","none");
	});

});
$(".index_noticeList a").on("touchstart",function(e){
	e.stopPropagation();
})


//选项卡
function TabMove(name,cursel,n){
n = n || 50;
for (i=1;i<=n;i++){
var menu=document.getElementById(name+"Tab"+i);
var con=document.getElementById(name+"_"+i);
menu.className=i==cursel?"current":"";
con.style.display=i==cursel?"block":"none";
} 
}

//通用弹出层触发动作----------------- begin
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
		popHeight.height(h+0);
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


/*邮币世界左侧效果*/
$(function(){
	$("#show_left").on("click",function(){
		$("#menu").css({"display":"block"})
	})
})










