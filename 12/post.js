var http=require('http');
var querystring=require('querystring');
var util=require('util');
http.createServer(function(req,res){
	var post='';
	//注册data事件监听函数，接受请求体的数据
	req.on('data',function(chunk){
		post+=chunk;
	});
	req.on('end',function(){
		//解析成这正的post为post请求格式
		//相当于Ext.decode()
		post=querystring.parse(post);
		//向前端返回
		res.end(util.inspect(post));
	});
}).listen(3000);