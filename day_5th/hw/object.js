var response = {
	"c":"32","i":"https://itemimgs.pstatic.net/personacon","l":[
		{"n":"곱게자랐더염","p":"/79/47/1074779.gif"},
		{"n":"art1st","p":"N"},
		{"n":"무한열정","p":"/21/31/2703121.gif"},
		{"n":"tlrud0621","p":"N"},
		{"n":"싱싱고","p":"/68/10/2831068.gif"},
		{"n":"퍼블리숑","p":"/19/49/1044919.gif"},
		{"n":"플르네","p":"/11/39/1073911.gif"},
		{"n":"ㅠㅠ","p":"N"},
		{"n":"김수호","p":"/71/3/480371.gif"},
		{"n":"noony","p":"N"},
		{"n":"열공모드","p":"N"},
		{"n":"웹스터디","p":"N"},
		{"n":"jhjhjh","p":"N"},
		{"n":"물좀주세요","p":"N"},
		{"n":"창하오","p":"N"},
		{"n":"nikke","p":"/70/3/480370.gif"},
		{"n":"미역국밥","p":"/75/8/2920875.gif"},
		{"n":"불줄","p":"N"},
		{"n":"멀더끙","p":"/54/43/1124354.gif"},
		{"n":"DeSY","p":"/64/40/1114064.gif"},
		{"n":"ppungppu","p":"/39/83/2878339.gif"},
		{"n":"긴자손","p":"/2/94/959402.gif"},
		{"n":"pubho","p":"N"},
		{"n":"추리왕메추리","p":"/21/31/2703121.gif"},
		{"n":"이오오","p":"N"},
		{"n":"프록시","p":"N"},
		{"n":"khyehye","p":"N"},
		{"n":"열사사","p":"N"},
		{"n":"SuFlatina","p":"/71/43/1124371.gif"}
	]
};

var totalCount = response.l.length;
var imagePath = response.i;
var members = response.l;

//랜덤숫자 뽑기
var makeRandom = function(max, min){
	var randomNumber = Math.random()*(max - min) + min;
	return parseInt(randomNumber,10);
};

//새로운 데이터 뽑기
var selectData = function(n){
	var samplingMembers = [];
	for(var i = 0; i < n ; i++){
		samplingMembers.push(members[i]);
	}
	return samplingMembers;
};

//뿌리기
var drawMembers = function(){
	var membersCount = makeRandom(0,totalCount);
	var newMemberData = selectData(membersCount);
	var memberLiElement = newMemberData.map(function(v){
		var src = v.p !== 'N' ? imagePath + v.p : '';
		var className = src ? '': 'no-image';
		return '<li class="'+ className +'"><span><img src="'+ src +'"></span><span>' + v.n + '</span></li>';
	}).join('');

	document.body.innerHTML = '<div>접속 맴버 : ' + membersCount + '명 <ul>' + memberLiElement + '</ul></div>';
};

setInterval(function(){
	drawMembers();
},1000);


/*
 1	리팩토링을 먼저 한다. (리팩토링은 동작하는 결과물을 망가뜨리지 않는다.
 흩뿌려진 코드를 함수로 묶거나 함수의 이름을 변경하거나 분기문의 위치를 이동하거나 한다.
 이미 만들어진 함수의 인풋과 아웃풋을 수정해야 한다면 다시 생각할 필요가 있다)

 2	데이터를 준비하는 부분과 데이터를 만드는(필터링) 부분과 그리는 부분을 구분한다.
 3	setInterval 내에 데이터를 만드는 부분과 그리는 부분이 있으면 그대로 그려진다.
 4	parseInt('40', 10);    // '40' 이라는 문자열을 10진수 숫자 40으로 변환하는 코드 예제
 5	어떻게 하면 사람들을 랜덤하게 구할 수 있을 것인가 고민한다
 */
