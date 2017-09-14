//声明事件对象
var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
//注册事件对象
event.on('some_event', function(){
	console.log('this is a self defined event');
});
//触发事件
setTimeout(function(){
	event.emit('some_event');
},1000);
