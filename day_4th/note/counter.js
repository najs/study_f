/* 0부터 시작하여 숫자를
	1씩 증가시키는 up 함수와
	1씩 감소 시키는 down함수 를 만들어라 */


function counter(){
	var number = 0;
	function up() {
		return ++number;
	}

	function down() {
		return --number;
	}

	return {
		up : up,
		down : down
	}
}


// 1. 객체화 - 함수로