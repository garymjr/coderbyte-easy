function LetterChanges(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
    , newStr = []
  str = str.split('')

  str.forEach(function(letter) {
    if (letter >= 'a' && letter <= 'z') {
      newStr.push(String.fromCharCode(letter.charCodeAt() + 1))
    } else {
      newStr.push(letter)
    }
  })

  return newStr.join('').replace(/[aeiou]/g, function(letter) {
    return letter.toUpperCase()
  })
}

console.log(LetterChanges('hello*3'))
console.log(LetterChanges('fun times!'))
