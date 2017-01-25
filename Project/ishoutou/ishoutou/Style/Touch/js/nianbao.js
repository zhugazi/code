$(function(){
	//年报
	
	//音乐控件
	autoplay($(".audio"));
	$(".audio").on("touchend",function(e){
		e.stopPropagation();
		autoplay($(this));
	})
	$(".yinyue").on("touchend",function(e){
		e.stopPropagation();
		autoplay($(".audio"));
	})
	function autoplay(obj){
		if(obj.hasClass("on")){
			obj.removeClass("on");
			$(".yinyue").hide();
			audio.pause();
		}else{
			obj.addClass("on");
			audio.play();
			$(".yinyue").show();
		}
	}
	$(document).on("touchstart",function(e) {
	    e.preventDefault();
	    var audio=document.getElementById("audio");
	    autoplay(audio)
	});
	
	var nowpage = 0,swipeUP=null,num=0,iftouch=false;
	
	setTimeout(function(){
		$(".container>section").eq(0).addClass("cur");
	},1000)
	
	var img1=$("#screen_Id1 img"),bimg=$("#screen_Id2 img")
		,bimg2=$("#screen_Id3 img"),bimg3=$("#screen_Id4 img"),
		bimg4=$("#screen_Id5 img"),
		bimgArr=[],bimgArr2=[],bimgArr3=[],bimgArr4=[];
	img1.on("load",function(){
		for(var i=0,j=bimg.length;i<j;i++){
			bimgArr.push(bimg.eq(i).attr("data-url"));
			bimg.eq(i).attr("src",bimgArr[i]);
		}
		for(var i=0,j=bimg2.length;i<j;i++){
			bimgArr2.push(bimg2.eq(i).attr("data-url"));
			bimg2.eq(i).attr("src",bimgArr2[i]);
		}
		for(var i=0,j=bimg3.length;i<j;i++){
			bimgArr3.push(bimg3.eq(i).attr("data-url"));
			bimg3.eq(i).attr("src",bimgArr3[i]);
		}
		for(var i=0,j=bimg4.length;i<j;i++){
			bimgArr4.push(bimg4.eq(i).attr("data-url"));
			bimg4.eq(i).attr("src",bimgArr4[i]);
			break;
		}
	})

	$(".touchwrap").on("touchstart",function(e) {
	    e.preventDefault();
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(".touchwrap").on("touchmove",function(e) {
	    e.preventDefault();
	    moveEndX = e.originalEvent.changedTouches[0].pageX,
	    moveEndY = e.originalEvent.changedTouches[0].pageY,
	    X = moveEndX - startX,
	    Y = moveEndY - startY;
	    if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
	   		swipeUP=false;
	   		iftouch=true;
	    }
	    else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
	    	swipeUP=true;
	    	iftouch=true;
	    }
	    
	});
	$(".screen_Id28>img").on("touchend",function(){
		iftouch=false;
		nowpage=28;
		num++;
		$(".container").animate({"top":nowpage * -100 + "%"},400);
		$(".container>section").eq(nowpage).addClass("cur").siblings().removeClass("cur");
	})
	$(".touchwrap").on("touchend",function(e){
		e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
	   
	    if(!iftouch){
	    	swipeUP=null;
	    }else{
	    	if(nowpage>=27){
	    		if(num==0){
		    		return false;
		    	}
		    }
	    	if(swipeUP){
		    	nowpage+=1;
			}else{
		    	nowpage-=1;
		    }
		    if(nowpage>28){
		    	nowpage=28;
		    }
		    if(nowpage<0){
		    	nowpage=0;
		    }
	    }
	    aaa()
	    $(".container").animate({"top":nowpage * -100 + "%"},400);
		$(".container>section").eq(nowpage).addClass("cur").siblings().removeClass("cur");
		$("#int").val(nowpage * -100 + "%");
	})
	function aaa(){
		var imgnum=0,
			h=$(".container>section").height(),
			bot=$(".container").position().top,
			val=$("#int").val();
		
		if(swipeUP){
			imgnum=nowpage+3;
		}
		if(val=="0%"){
			//console.log(val);
			var imgarr=[],
			imgloadobj=$("#screen_Id3 img");
			console.log(imgloadobj);
			for(var i=0,j=imgloadobj.length;i<j;i++){
				imgarr.push(imgloadobj.eq(i).attr("data-url"));
				imgloadobj.eq(i).attr("src",imgarr[i]);
			}
		}else if(val<"0%"){
			var imgarr=[],
			imgloadobj=$("#screen_Id"+(imgnum+1)+" img");
			console.log(imgloadobj);
			for(var i=0,j=imgloadobj.length;i<j;i++){
				imgarr.push(imgloadobj.eq(i).attr("data-url"));
				imgloadobj.eq(i).attr("src",imgarr[i]);
			}
		}
		
	}
});












