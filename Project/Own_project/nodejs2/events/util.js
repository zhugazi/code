var util=require('util');
function Person(){
	this.name='朱鹏辉',
	this.tostring=function(){
		return this.name;
	}
}
var obj=new Person();
var name=obj.tostring();
console.log(name);
console.log(util.inspect(obj));
console.log(util.inspect(obj,true,2,true));