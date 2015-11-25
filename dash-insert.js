function DashInsert (str) {
  var offset = 0
    , dashes = []
  str = str.split('')

  for (var i = 0; i < str.length; i++) {
    if (str[i] % 2 != 0 && str[i+1] % 2 != 0) {
      dashes[i+offset] = str[i]
      dashes[i+offset+1] = '-'
      offset++
    } else {
        dashes[i+offset] = str[i]
      }
  }

  return dashes.join('')
}

console.log(DashInsert('99946'))
console.log(DashInsert('56730'))
