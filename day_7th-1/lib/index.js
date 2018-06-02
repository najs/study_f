'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var DOM = {
	app: '#app'
};

$(DOM.app).append('<div id="count">0</div>');
$(DOM.app).append('<button id="btn-up">up</button>');
$(DOM.app).append('<button id="btn-down">down</button>');

var Person = function () {
	function Person(name) {
		_classCallCheck(this, Person);

		this.hp = 100;
		this.space = [];
	}

	_createClass(Person, [{
		key: 'eat',
		value: function eat(food) {
			this.space.push(food);
			this.hp++;
		}
	}]);

	return Person;
}();

/*const p1 = new Person('hong');
const p2 = new Person('pong');
p1.eat({name: '사과'});
p2.eat({name: '똥'});
console.log(p1);
console.log(p2);*/

var Student = function (_Person) {
	_inherits(Student, _Person);

	function Student(name) {
		_classCallCheck(this, Student);

		return _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name));
	}

	_createClass(Student, [{
		key: 'study',
		value: function study() {
			this.hp--;
		}
	}, {
		key: 'eat',
		value: function eat(food) {
			console.log('학교에서 냠냠');
			_get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'eat', this).call(this, food);
		}
	}]);

	return Student;
}(Person);

var Father = function (_Person2) {
	_inherits(Father, _Person2);

	function Father(name) {
		_classCallCheck(this, Father);

		return _possibleConstructorReturn(this, (Father.__proto__ || Object.getPrototypeOf(Father)).call(this, name));
	}

	_createClass(Father, [{
		key: 'work',
		value: function work() {
			this.hp--;
		}
	}, {
		key: 'eat',
		value: function eat(food) {
			_get(Father.prototype.__proto__ || Object.getPrototypeOf(Father.prototype), 'eat', this).call(this, food);
			this.hp = this.hp + 4;
		}
	}]);

	return Father;
}(Person);

var f1 = new Father('papa');
f1.work();
f1.eat({ name: '밥' });
f1.eat({ name: '밥' });
f1.eat({ name: '밥' });
f1.eat({ name: '밥' });
f1.eat({ name: '밥' });
f1.eat({ name: '밥' });
f1.eat({ name: '밥' });
console.log(f1);

var mother = function (_Person3) {
	_inherits(mother, _Person3);

	function mother(name) {
		_classCallCheck(this, mother);

		return _possibleConstructorReturn(this, (mother.__proto__ || Object.getPrototypeOf(mother)).call(this, name));
	}

	return mother;
}(Person);