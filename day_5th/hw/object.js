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


var memberLiElement = members.map(function(v){
	var src = v.p !== 'N' ? imagePath + v.p : '';
	var className = src ? '': 'no-image';
	return '<li class="'+ className +'"><span><img src="'+ src +'"></span><span>' + v.n + '</span></li>';
}).join('');


var randomMembers = function(){
	var totalCount2 = Math.floor(Math.random(Number)*100);
	document.body.innerHTML = '<div>접속 맴버 : ' + totalCount2 + '명 <ul>' + memberLiElement + '</ul></div>';
};

randomMembers();
/*
setInterval(function(){
	randomMembers();
},1000);
*/





/* 일정주기마다 랜덤한 인원을 출력하기
1. 원본 데이터 배열수보다 작은 랜덤숫자를 뽑아낸다
2. setInterval 원본배열에서 복제해서 랜덤숫자만큼 다른 배열을 만들고 뿌린다
*/