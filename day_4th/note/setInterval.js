function looper(callbackFn, cnt){
	for(var i = 0; i < cnt ; i++){
		callbackFn(i);
	}
}

var number =0;
function up(number) {
	console.log(number);
}

looper(up, 4); //사용자 관점
looper(function(number){
	console.log(number)
}, 4);