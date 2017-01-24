;(function($,window,document,undefined){
	var ceshi = function(ele,opt) {
    //在这里面,this指的是用jQuery选中的元素
    //example :$('a'),则this=$('a')
    //this.css('color', 'red');
    /*var defaults={
    	'color':'red',
    	'fontSize':'14px'
    }
    var optionsOne=$.extend({},defaults,options);
    return this.css({
    	"color":optionsOne.color,
    	"fontSize":optionsOne.fontSize
    })*/
   this.$element=ele,
   this.defaults={
   	'color':'red',
   	'fontSize':'14px',
   	'textDecoration':'none'
   },
   this.options=$.extend({},this.defaults,opt)
  
}
ceshi.prototype={
	beautify: function() {
        return this.$element.css({
            'color': this.options.color,
            'fontSize': this.options.fontSize,
            'textDecoration': this.options.textDecoration
        });
   }
}
$.fn.myceshi=function(options){
	var ceshis=new ceshi(this,options);
	return ceshis.beautify();
}
})(jQuery,window,document);





