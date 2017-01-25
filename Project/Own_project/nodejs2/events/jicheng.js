var util=require('util');
function Fu(){
	this.name='朱鹏辉',
	this.age=20,
	this.play=function(){
		console.log(this.name+"喜欢玩张家幸");
	}
}
Fu.prototype.like=function(){
	console.log("我一直以来在心里最喜欢和最爱的人是龚青云，她既是我的初恋也是我的最爱，即使我不能和她在一起，但是我希望你可以过得幸福快乐，希望你能记着一直有这么一个人在默默地爱着你");
	console.log("曾经有一份真挚的爱情摆在我的面前我没有好好的珍惜，当真正的失去的时候我才知道后悔，如果上天可以在给我一次机会，我想对她说，我爱你，如果非要加个期限的话我希望是天荒地老");
}
function Sub(){
	this.name='朱鹏辉',
	this.age=22,
	this.like=function(){
		console.log("待定。。。")
	}
}
util.inherits(Sub,Fu);
var obj=new Fu();
obj.play();
obj.like();
console.log(obj);

var obj2=new Sub();
obj2.like();
console.log(obj2);





