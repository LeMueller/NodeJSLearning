//引入模块
var http=require('http')
//创建服务
var server=http.createServer(function(req,res){
	console.log(req.url);
	//响应头
	res.writeHead(200,{'Content-Type':'text/html'});
	//响应内容
	res.write('<h1>Node.js</h1>');
	//结束响应
	res.end('<p>PCAT</p>');
});
//进啊挺端口
server.listen(3000);
server.on('close',function(){
	console.log('server is close');
})
console.log('HTTP server is listening at port 3000.');