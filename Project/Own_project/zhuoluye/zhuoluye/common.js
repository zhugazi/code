// JavaScript Document
$(function(){

	if($('body').find('div').hasClass('part1')){
		var positionVal_1=$('.part1').offset().top-300;
	}
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>positionVal_1){
			//$('.part1 h2 i').fadeIn(1500);
			//$('.item1').show().animate({left:246},600);
			$('.guide_anime_box1').animate({left:0},200);
			$('.guide_anime_box2').animate({right:50},800);
			$('.guide_anime_box3').animate({left:0},1400);
			$('.guide_anime_box4').animate({right:50},2000);

		}
	});

	$(".guide_box6 ul li").hover(
		function(){
			$(this).find("p").stop().animate({height:"245px"},400);
			$(this).find("p em").stop().animate({paddingTop:"97px"},400);
		},
		function(){
			$(this).find("p").stop().animate({height:"50px"},400);
			$(this).find("p em").stop().animate({paddingTop:"0px"},400);
		}
	);

	$(".guide_box4 .hover_step li").hover(
		function(){
			$(this).addClass("over");
		},
		function(){
			$(this).removeClass("over");
		}
	);


});




