var event=require('events');
var emitter=event.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
});
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
})
emitter.emit('someEvent','朱鹏辉','张家幸');