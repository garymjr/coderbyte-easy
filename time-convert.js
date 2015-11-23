function TimeConvert(num) {
  var m = num % 60
  var h = (num - m) / 60
  return h + ':' + m
}

console.log(TimeConvert(126))
console.log(TimeConvert(45))
