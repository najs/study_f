/*document.getElementById('btn').addEventListener('click', () => {
	alert(12341543535);
});*/


const DOM = {
	app: '#app'
};

$(DOM.app).append(`<div id="count">0</div>`);
$(DOM.app).append(`<button id="btn-up">up</button>`);
$(DOM.app).append(`<button id="btn-down">down</button>`);

class Person {
	constructor(name) {
		this.hp = 100;
		this.space = [];
	}
	eat(food) {
		this.space.push(food);
		this.hp++;
	}
}

/*const p1 = new Person('hong');
const p2 = new Person('pong');
p1.eat({name: '사과'});
p2.eat({name: '똥'});
console.log(p1);
console.log(p2);*/


class Student extends Person {
	constructor(name) {
		super(name);
	}
	study() {
		this.hp--;
	}
	eat(food){
		console.log('학교에서 냠냠');
		super.eat(food);
	}
}




class Father extends Person {
	constructor(name){
		super(name);
	}
	work() {
		this.hp--;
	}

	eat(food){
		super.eat(food);
		this.hp = this.hp + 4;
	}
}

const f1 = new Father('papa');
f1.work();
f1.eat({name: '밥'});
f1.eat({name: '밥'});
console.log(f1);


class mother extends Person {
	constructor(name){
		super(name);
	}
}