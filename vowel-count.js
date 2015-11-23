function VowelCount(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var count = 0
  str = str.toLowerCase().split('')

  for (var i = 0; i < str.length; i++) {
    vowels.forEach(function(vowel) {
      if (str[i] === vowel) {
        count++
      }
    })
  }
  return count
}

console.log(VowelCount('hello'))
console.log(VowelCount('coderbyte'))
