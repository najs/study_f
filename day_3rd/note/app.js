function getElementById(id){
	return document.getElementById(id);
}

getElementById("btn").addEventListener('click', app);

getElementById("input-color")
	.addEventListener('change', function(e){
		changeColor("content", e.target.value);
	});

getElementById("input-fontSize")
	.addEventListener('change', function(e){
		changeFontSize("content", e.target.value);
	});

getElementById("input-color-test")
	.addEventListener('change', function(e){
		changeColor("test", e.target.value);
	});


function popup(text) {
	alert(text);
}

function draw(deviceName) {
	getElementById("content").innerText = deviceName;
}

function isIPhone() {
	return navigator.userAgent.match(/iPhone/);
}

function isAndroid() {
	return navigator.userAgent.match(/Android/);
}

function app() {
	if(isIPhone()) {
		return draw('아이퐁');
	}
	if(isAndroid()) {
		return draw('안드로이드');
	}
	return draw('기타기타');
}

function changeColor(id, color) {
	getElementById(id).style.color = color;
}

function changeFontSize(id, fontSize) {
	getElementById(id).style.fontSize = fontSize;
}






