import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

function log() {
	console.log(111111);
}
// ReactDOM.render(<div onClick={log}>0</div>, document.getElementById('app'));
ReactDOM.render(
	<div>
		<Counter onClick={() => {
      console.log(1111);
    }}>{1000}</Counter>
		<Counter onClick={() => {
      console.log(2222);
    }}>{200}</Counter>
		<Counter onClick={() => {
      console.log(3333);
    }}>{150}</Counter>
		<Counter onClick={() => {
      console.log(4444);
    }}>{100}</Counter>
	</div>
	,
	document.getElementById('app')
);

/*
import $ from 'jquery';

const model = {
	count: 0
};
$('#app').append(`<div id="count">${model.count}</div>`);
$('#count').on('click', function() {
	const count = model.count += 1;
	$(this).text(count);
});*/
