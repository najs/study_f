function filter(list, callbackkFn) {
	var result = [];
	// console.log(callbackkFn(list[i]))
	for(var i = 0 ; i < list.length ; i++) {
		if (callbackkFn(list[i])){
			result.push(list[i]);
		}
	}
	return result;
}