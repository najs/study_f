const $ = require('jquery');

const DOM = {
  app: '#app'
};

$(DOM.app).append(`<div id="count">0</div>`);
$(DOM.app).append(`<button id="btn-up">up</button>`);
$(DOM.app).append(`<button id="btn-down">down</button>`);


class NumberControl {
	constructor(num) {
		if(!num) num = 0;
		this.num = num;
	}
	plus() {
		this.num++;
	}
	minus() {
		this.num--;
	}
}


const n1 = new NumberControl();

$('#btn-up').on('click', () => {
	n1.plus();
	$('#count').html(n1.num);
});

$('#btn-down').on('click', () => {
	n1.minus();
	$('#count').html(n1.num);
});





