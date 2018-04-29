/*
function toggle() {
	sw = !sw;
	return sw;
}
*/

// 즉시실행함수 IIFE
var toggle = (function(){
	var sw = false;
	return function(){
		sw = !sw;
		return sw;
	}
})();
