'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var DOM = {
	app: '#app'
};

$(DOM.app).append('<div id="count">0</div>');
$(DOM.app).append('<button id="btn-up">up</button>');
$(DOM.app).append('<button id="btn-down">down</button>');

var NumberControl = function () {
	function NumberControl(num) {
		_classCallCheck(this, NumberControl);

		if (!num) num = 0;
		this.num = num;
	}

	_createClass(NumberControl, [{
		key: 'plus',
		value: function plus() {
			this.num++;
		}
	}, {
		key: 'minus',
		value: function minus() {
			this.num--;
		}
	}]);

	return NumberControl;
}();

var n1 = new NumberControl();

$('#btn-up').on('click', function () {
	n1.plus();
	$('#count').html(n1.num);
});

$('#btn-down').on('click', function () {
	n1.minus();
	$('#count').html(n1.num);
});