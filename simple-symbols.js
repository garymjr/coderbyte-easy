function SimpleSymbols (str) {
  var re = /[A-za-z]/
  str = str.split('')


  for (var i = 0; i < str.length; i++) {
    if (re.test(str[i])) {
      if (str[i - 1] != '+' || str[i + 1] != '+') {
        return false
      }
    }
  }

  return true
}

console.log(SimpleSymbols('+d+=3=+s+'))
console.log(SimpleSymbols('f++d+'))
