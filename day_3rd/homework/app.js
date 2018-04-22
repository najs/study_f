getElementById('btn').addEventListener('click', app);

getElementById('input-color')
	.addEventListener('change', function(e) {
		css('content','color', e.target.value);
	});
getElementById('input-font-size')
	.addEventListener('change', function(e) {
		css('content', 'fontSize', e.target.value);
	});
getElementById('input-color-test')
	.addEventListener('change', function(e) {
		css('test', 'backgroundColor', e.target.value);
	});
getElementById('select-width-test')
	.addEventListener('change', function(e) {
		css('test', 'width', e.target.value + 'px');
		css('test', 'height', e.target.value + 'px');
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
function css(id, styleProperty, value){
	return getElementById(id).style[styleProperty] = value;
}

// q2
function sum(i){
	return function(j){
		return i+j;
	}
}
sum(5)(10);

var a = sum(25);
var b = sum(5);
var c = sum(10);
a(10); //25+10


//q3
/* function typeToKor(v){
	if(typeof v === 'number')	return "숫자";
	if(typeof v ==='string')	return "문자";
	if(typeof v === 'boolean') return "참거짓";
	if(typeof v === "object")	return "객체";
	if(typeof v === "function")	return "함수";
	return '정체가 무엇이냐'
} */
	/* q3 풀이 */
function typeToKor(value){
	var types = {
		number : '숫자',
		string : '문자',
		boolean : '참거짓',
		object : '객체',
		function : '함수',
		undefined : '없어용'
	};
	return types[typeof value];
}
typeToKor(5);


//q4
function compare(x, y){
	return x > y ? x : y;
}
function biggest(i,j,k,l){
	return compare(compare(compare(i,j),k),l);
}
/* q4 풀이 */

function biggest(a,b,c,d){
	var max = a;
	// 반복문 시작
	if ( max < b ) {
	 max = b;
	}
	if ( max < c ) {
	 max = c;
	}
	if ( max < d ) {
	 max = d;
	}
	// 반복문 끝
	return max;
}
biggest(2,5,10,1);

/*
function biggest(i,j,k,l){
	return Math.max.apply(null, [i,j,k,l]);
}
*/