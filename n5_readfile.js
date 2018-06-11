var http = require('http');
var url = require('url');
var router = require('./router');
// var optfile = require('./models/optfile.js');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url !== '/favicon.ico'){ // 清除2次访问
		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');//替换掉前面的/
		router[pathname](request,response);

		// optfile.readfileSync('./views/login.html');
		/*
		function recall(data){
			response.write()
		}
		optfile.readfile('./views/login.html',response);
		response.end('ok');	// 结束请求中状态,不写则没有http协议尾
		console.log('主程序执行完毕');
		*/
	}
}).listen(8000)
console.log("Server running at http://127.0.0.1:8000/");