// JavaScript Document

$('.ddw').val(0);
$('.ddw2').val(0);
setInterval(function(){
	$('.report_wrap>div').eq(0).find('span').animate({'bottom':'90px'},500,function(){
		$('.report_wrap>div').eq(0).find('span').animate({"bottom":"110px"})
	})
},1000);
var numb=0;
$(function(){
	$('.report_wrap').mousewheel(function(event, delta) {
		var aaaa=$('.ddw2').val();
		if (aaaa == 1){
			return;	
		}
		qpgd(delta);
		
	});
});
function qpgd(a){
	var z =$('.ddw').val();
	b = parseInt(z);
    c = $('.report_wrap>div').length;
    if(a<0){
		if(-b==c-1){
			return;
		}
		b-=1;
		$('.ddw2').val(1);
	}else if(a>0){
		if(-b==0){
			return;
		}
		b+=1;
		$('.ddw2').val(1);
	}
	
	var single_hh = $(window).height();
	if(b<=-8){
		if(numb==0){
			b = -8;
			numb++;
			click_hh =-single_hh*b;
			$('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
			$('.report_wrap').animate({'bottom': click_hh},500);
			return;
		}
	}
	$('.ddw').val(b);
	click_hh =-single_hh*b;
	$('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
	$('.report_wrap').animate({'bottom': click_hh},500);
	setTimeout(function(){
		$('.ddw2').val(0);
	},1000);
}	
	$(".screen_Id9_box ul>li").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
		var single_hh = $(window).height();
		click_hh =-single_hh*-9;
		$('.report_wrap').animate({'bottom': click_hh},500);
		$('.fixed_r li').eq(9).addClass('on').siblings('li').removeClass('on');
		setTimeout(function(){
			$('.ddw2').val(0);
			$('.ddw').val(-9);
		},1000);
	})
	$('.fixed_r li').eq(0).addClass('on');
	$('.fixed_r li').click(function(event,delta){
		var b = $(this).index();
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);
		var single_hh = $(window).height();
		click_hh =single_hh*b;
		$('.report_wrap').animate({'bottom': click_hh},500);
		qpgd(delta);
	})
function quanp(){
	var single_hh = $(window).height();
	var single_ww = $(window).width();
	$(".report_wrap>div").height(single_hh);
}
quanp();
$(window).resize(function(){
	if (typeof indexSlides != 'undefined' && indexSlides.reformat) 
		indexSlides.reformat();
		quanp();
});