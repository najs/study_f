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