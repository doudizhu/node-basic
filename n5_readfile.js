var http = require('http');
var optfile = require('./models/optfile.js');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url !== '/favicon.ico'){ // 清除2次访问
		// optfile.readfileSync('./views/login.html');
		function recall(data){
			response.write(data);
			response.end('ok');	// 结束请求中状态,不写则没有http协议尾	
		}
		optfile.readfile('./views/login.html',recall);
		console.log('主程序执行完毕');
	}
}).listen(8000)
console.log("Server running at http://127.0.0.1:8000/");