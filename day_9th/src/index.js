import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Button from './components/Buttton';
import App from  './containers/App';
import MembershipHome from './containers/MembershipHome'

function log() {
	console.log(111111);
}


ReactDOM.render(
	<MembershipHome	/>
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
