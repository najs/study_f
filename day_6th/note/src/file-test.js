const fs = require('fs');

//file 파일 만들기
/*
fs.writeFile('abc.txt', 'hihihihihihih', () => {
	console.log('success');
});
*/

fs.readFile('abc123.txt', 'utf8', (err, file) => {
	console.log(file);
});
