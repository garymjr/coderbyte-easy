function ExOh(str) {
  var x = 0, o = 0
  str = str.split('')

  str.forEach(function(char) {
    if (char === 'x') {
      x++
    } else {
        o++
      }
  })
  return x === o
}

console.log(ExOh('xooxxo'))
console.log(ExOh('x'))
