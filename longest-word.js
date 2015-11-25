function LongestWord (sen) {
  var longest = ''

  sen = sen.replace(/[^\w\s]/g, '').split(' ')
  sen.forEach(function (word) {
    if (word.length > longest.length) longest = word
  })
  return longest
}

console.log(LongestWord('fun&!! time'))
console.log(LongestWord('I love dogs'))
