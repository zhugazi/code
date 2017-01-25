$(function(){
	
	//注册登录提示
	$(".run").click(function(){
		$(".alertContent").fadeIn().delay(2000).fadeOut(300);
	});

	$(".alert_newTips .close_btn").click(function(){
		$(".alert_newTips").fadeOut(300);
	});
	
	//选择省市区
	$(".choose1,.tipWin").click(function(){
		$(".choose_area").fadeIn();
	});
	
	$(".choose_area .confirm,.choose_area .cancel,.tipsClose").click(function(){
		//$("this").parents(".choose_area").fadeOut();
		$(".choose_area").fadeOut();
	});
	
	//验证码
	$(".getCode").click(function(){
		$("#getCode").hide();
		$("#getCodeTime").show().addClass("hui").css({"display":"inline-block"});
							  
	});
	
	//加载更多
	$(".licai_Main .show_more,.Anchor_Main .show_more").click(function(){
		$(this).prev(".hide_list").show();
		$(this).prev(".hide_list").find(".ppList li:first-child").css("border-top","1px solid #ddd");
	});
	
	
	
	$(".systemMsg_main .show_more").click(function(){
		$(this).prev(".systemMsg_list").find(".hide_list").show();
		$(this).prev(".systemMsg_list").find(".hide_list").find("li:first-child").css("border-top","1px solid #ddd");
	});
	
	$(".details_list .show_more").click(function(){
		$(this).prev(".member").find(".member_list").fadeIn(800);
		$(this).prev(".prize").find(".prize_list").fadeIn(800);
	});
	
	//显示更多内容
	$(".show_con span").click(function(){
		$(this).parent(".show_con").prev(".contents").css({height:"auto"});
		$(this).parent(".show_con").hide();
	});
	
	$("#more").toggle(
	  function () {
		$(".more_box").fadeIn(200);
		$(this).addClass("on");
	  },
	  function () {
		$(".more_box").fadeOut(200);
		$(this).removeClass("on");
	  }
	);
});

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


$(function(){
	var phoneyan={
			"yan":[
				{
					"shouji":"18910522895",
					"imgyan":"1234",
					"shouyan":"1111"
				}
			]
	}
	
	//手机号判断
	
	$(".tg_reg>ul>li>input").on("focus",function(){
		$(this).css({"border":"1px solid #52acca"});
	}).on("blur",function(){
		var that=$(this),
			thisV=$(this).val(),
			reg=/^[0-9_a-zA-Z]{6,16}$/,
			Phonereg=/^1[3,5,8]{1}[0-9]{9}$/,
			imgUrl="images/sep/wap_zhuolu01_panduan_03.jpg";
		$(this).css({"border":"1px solid #d4d4d4"});
		if($(this).hasClass("phone_num")){
			if(thisV.replace(/\s+/g,"")==""){
				$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>手机号不能为空");
				$(this).parents("li").css({"height":"0.94rem"})
			}else if(!(Phonereg.test(thisV))){
				$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>手机号格式不对");
				$(this).parent("li").css({"height":"0.94rem"});
			}else{
				$.each(phoneyan, function(i,k) {
					if(thisV==k[0].shouji){
						that.nextAll("p").show().html("<img src='"+imgUrl+"'/>此号已经注册");
						that.parent("li").css({"height":"0.94rem"});
					}else{
						that.nextAll("p").hide();
						that.parent("li").css({"height":"0.64rem"});
					}
				});
			}
		}else if($(this).hasClass("img_yan")){
			if(thisV.replace(/\s+/g,"")==""){
				$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>验证码不能为空");
				$(this).parents("li").css({"height":"0.94rem"})
			}else{
				$.each(phoneyan, function(i,k) {
					if(!(thisV==k[0].imgyan)){
						that.nextAll("p").show().html("<img src='"+imgUrl+"'/>验证码错误");
						$(this).parents("li").css({"height":"0.94rem"});
					}else{
						that.nextAll("p").hide();
						that.parent("li").css({"height":"0.64rem"});
					}
				});
			}
		}else if($(this).hasClass("phone_yan")){
			if(thisV.replace(/\s+/g,"")==""){
				$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>验证码不能为空");
				$(this).parents("li").css({"height":"0.94rem"})
			}else{
				$.each(phoneyan, function(i,k) {
					if(!(thisV==k[0].shouyan)){
						that.nextAll("p").show().html("<img src='"+imgUrl+"'/>验证码错误");
						$(this).parents("li").css({"height":"0.94rem"});
					}else{
						that.nextAll("p").hide();
						that.parent("li").css({"height":"0.64rem"});
					}
				});
			}
		}else if($(this).hasClass("login_yan")){
			if(thisV.replace(/\s+/g,"")==""){
				$(this).next().show().html("<img src='"+imgUrl+"'/>密码不能为空");
				$(this).parents("li").css({"height":"0.94rem"});
			}else if(!(reg.test(thisV))){
				$(this).next().show().html("<img src='"+imgUrl+"'/>密码格式不正确");
				$(this).parents("li").css({"height":"0.94rem"});
			}else{
				$(this).next().hide();
				that.parent("li").css({"height":"0.64rem"});
			}
		}else if($(this).hasClass("ren_yan")){
			$(this).next().hide();
			that.parent("li").css({"height":"0.64rem"});
		}
	})
})










