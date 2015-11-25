function SwapCase (str) {
  str = str.split('')

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      str[i] = str[i].toLowerCase()
    } else {
      str[i] = str[i].toUpperCase()
    }
  }
  return str.join('')
}

console.log(SwapCase('Hello-LOL'))
console.log(SwapCase('Sup DUDE!!?'))
