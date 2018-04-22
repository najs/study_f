function countif(group, target) {
	var i= group.length;
	var result = 0;
	while(i--){
		//console.log(group[i]);
		if(group[i] === target){
			result += 1;
		}
	}
	return result;
}

var classs = ['남', '여', '여', '여', '남'];
console.log(countif(classs, '남')); //2
console.log(countif(classs, '여')); //3