getElementById('btn').addEventListener('click', app);

getElementById('input-color')
	.addEventListener('change', function(e) {
		css('color', 'content', e.target.value);
	});
getElementById('input-font-size')
	.addEventListener('change', function(e) {
		css('fontSize', 'content', e.target.value);
	});
getElementById('input-color-test')
	.addEventListener('change', function(e) {
		css('backgroundColor', 'test', e.target.value);
	});
getElementById('select-width-test')
	.addEventListener('change', function(e) {
		css('width', 'test', e.target.value + 'px');
		css('height', 'test', e.target.value + 'px');
	});

function getElementById(id) {
	return document.getElementById(id);
}
function draw(deviceName) {
	getElementById('content').innerText = deviceName;
}
function isIPhone() {
	return navigator.userAgent.match(/iPhone/);
}
function isAndroid() {
	return navigator.userAgent.match(/Android/);
}
function app() {
	if (isIPhone()) {
		return draw('아이퐁');
	}
	if(isAndroid()) {
		return draw('안드로이드');
	}
	return draw('기타기타');
}
/* --------- */


//q1
function css(styleProperty, id, value){
	return getElementById(id).style[styleProperty] = value;
}

// q2
function sum(i){
	return function(j){
		return i+j;
	}
}
sum(5)(10);


//q3
function typeToKor(v){
	if(typeof v === 'number')	return "숫자";
	if(typeof v ==='string')	return "문자";
	if(typeof v === 'boolean') return "참거짓";
	if(typeof v === "object")	return "객체";
	return '정체가 무엇이냐'
}
typeToKor(5);


//q4
function compare(x, y){
	return x > y ? x : y;
}
function biggest(i,j,k,l){
	return compare(compare(compare(i,j),k),l);
}
biggest(2,5,10,1);

/*
function biggest(i,j,k,l){
	return Math.max.apply(null, [i,j,k,l]);
}
*/