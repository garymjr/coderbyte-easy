function NumberAddition (str) {
  var sum = 0
  str = str.replace(/[^\d\s]+/g, ' ').split(' ')
  for (var i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      sum += Number(str[i])
    }
  }
  return sum
}

console.log(NumberAddition('75Number9'))
console.log(NumberAddition('10 2One Number*1*'))
