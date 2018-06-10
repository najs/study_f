import $ from 'jquery';

const model = {
	count: 0
};
$('#app').append(`<div id="count">${model.count}</div>`);
$('#count').on('click', function() {
	const count = model.count += 1;
	$(this).text(count);
});