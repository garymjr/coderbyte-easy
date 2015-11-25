function Palindrome (str) {
  str = str.replace(/\s/g, '')
  var palindrome = str
  return str === palindrome.split('').reverse().join('')
}

console.log(Palindrome('never odd or even'))
console.log(Palindrome('eye'))
