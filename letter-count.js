function LetterCount(str) {
  var word, re
  str = str.split(' ')

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str[i].length; j++) {
      re = new RegExp(str[i][j], 'g')
      if (str[i].match(re).length > 1) return str[i]
    }
  }
  return -1
}

console.log(LetterCount('Hello apple pie'))
console.log(LetterCount('No words'))
