function ABCheck(str) {
	str = str.split('')
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'a') {
			for (var j = 1; j <= 3; j++) {
				if (str[i+j] === 'b' || str[i-j] === 'b') {
					return false
				}
			}
		}
	}
	return true
}

console.log(ABCheck('after badly'))
console.log(ABCheck('Laura sobs'))
