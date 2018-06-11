var http = require('http');
// var User = require('./models/User');
var Teacher = require('./models/Teacher');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url !== '/favicon.ico'){ // 清除2次访问
		/**
		 * 成员方法
		 */
		// user = new User();
		// user.id = 1;
		// user.name = '张三';
		// user.age = 20;
		// user.enter();
		/**
		 * 构造函数
		 */
		// user = new User(1,'张三',20);
		// user.enter();
		/**
		 * 子类
		 */
		teacher = new Teacher(1,'张三',20);
		teacher.enter();
		teacher.teach(response);

		response.end();	// 结束请求中状态
	}
}).listen(8000)
console.log("Server running at http://127.0.0.1:8000/");

function fun1(res){
	console.log('fun1')
	res.write('hello,我是fun1')
}