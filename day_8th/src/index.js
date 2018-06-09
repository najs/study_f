import $ from 'jquery';
import {cre} from 'redux';

import { Button, Div } from './components';
import { createAppStore, subscribe } from './store';
import { decrease, increase } from './actions/counter'

const store = createAppStore();
window.store = store;


const app = $('#app');

app.append(Div({ id: 'count', children: 0 }));
app.append(Button({ id: 'btn-up', children: 'up' }));
app.append(Button({ id: 'btn-down', children: 'down' }));


$('#btn-up').on('click', increase);
$('#btn-down').on('click', decrease);

store.subscribe(() => { //dispatch 할때마다 실행하는 함수
	render();
});

function render() {
	const state = store.getState();
	$('#count').text(state.count);
}