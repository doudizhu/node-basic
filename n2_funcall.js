var http = require('http');
var otherfun = require('./models/otherfuns.js')

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url !== '/favicon.ico'){ // 清除2次访问
		/**
		 * 本地内部回调函数
		 */
		// fun1(response); 
		/**
		 * 外部回调函数
		 */
		// 只支持一个函数
		// otherfun(response); 
		// 多个函数
		// otherfun.fun2(response);
		// otherfun.fun3(response);
		// -----用字符串调用对应的函数-----
		funname = 'fun3';
		otherfun[funname](response);

		response.end();	// 结束请求中状态
	}
}).listen(8000)
console.log("Server running at http://127.0.0.1:8000/");

function fun1(res){
	console.log('fun1')
	res.write('hello,我是fun1')
}