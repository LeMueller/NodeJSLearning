var http=require('http');
http.createServer(function(reg,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>Node.js we have a server with supervisor</h1>');
	res.end('<p>End</p>');
}).listen(5858);