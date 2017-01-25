$(function(){
	//Featured Slide
	
	//Thumbs
	$('.thumbs-cotnainer').each(function(){
		$(this).swiper({
			slidesPerView:'auto',
			offsetPxBefore:10,
			offsetPxAfter:0,
			calculateHeight: true
		})
	})

})
