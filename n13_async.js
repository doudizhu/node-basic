/*
// 1.同步嵌套执行
function oneFun() {
	
	// setTimeout(function(){

	// },1000)

	ii=0;
	setInterval(function(){
		console.log("aaa="+new Date());
		ii++;
		if(ii==3){
			clearInterval(this);
			twoFun();
		}
	}, 1000);
	console.log("oneFun");
}
function twoFun() {
	jj=0;
	setInterval(function(){
		console.log("bbb="+new Date());
		jj++;
		if(jj==3){
			clearInterval(this);
		}
	}, 1000);
	console.log("oneFun执行完毕");
}
oneFun();
// twoFun();
console.log("主进程执行完毕");
*/



// 2.异步：串行无关联
var async = require('async');
function exec(){
	async.series(
		{
			one:function(done){
				ii=0;
				setInterval(function(){
					console.log("aaa="+new Date());
					ii++;
					if(ii==3){
						clearInterval(this);
						done(null,'one完毕')
					}
				}, 1000);
			},
			two:function(done){
				jj=0;
				setInterval(function(){
					console.log("bbb="+new Date());
					jj++;
					if(jj==3){
						clearInterval(this);
						done(null,'two完毕')
					}
				}, 1000);
			}
		},
		// 回调结果集
		function(err,rs){
			console.log(err);
			console.log(rs);
		}
	)
}
exec();
console.log("主进程执行完毕");