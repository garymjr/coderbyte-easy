function LetterCapitalize (str) {
  str = str.split(' ')

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1)
  }
  return str.join(' ')
}

console.log(LetterCapitalize('hello world'))
console.log(LetterCapitalize('i ran there'))
