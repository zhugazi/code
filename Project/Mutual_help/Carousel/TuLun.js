/*var liWidth=$(".tu>li").eq(0).width(),
	oul=$(".tu"),
	len=$(".tu>li").length+1,
	i=0;
	oul.css({
		"width":liWidth*len
	})
	function Lbo(){
		
		if(i>=len-2){
			oul.animate({
				"left":-i*liWidth
			})
			i=0;
		}else{			
			oul.animate({
				"left":-i*liWidth
			})	
			i++;
		}	
		
	}
	function xunhuan(){
		var outLeft=oul.position().left;
		console.log(outLeft)
		if(outLeft <= -300){
			$(".tu>li").eq(0).appendTo(oul)
			oul.css({
				"left":0
			})
			//i=0;
			
		}else{				
			oul.animate({
				"left":-liWidth
			})	
			
		}		
	}
	setInterval(function(){
		xunhuan();
	},1000)*/
	
;(function(){
	$.fn.Dlun.defaults={
		change:false,
		oul:"oul",
		box:"box"	
	}
	$.fn.Dlun=function(options){
		var options=$.extend(true,{},$.fn.Dlun.defaults,options||{});
		
	}
})()
	
	
	
	
	
	