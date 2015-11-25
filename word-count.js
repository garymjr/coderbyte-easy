function WordCount (str) {
  str = str.split(' ')
  return str.length
}

console.log(WordCount('Hello World'))
console.log(WordCount('one 22 three'))
