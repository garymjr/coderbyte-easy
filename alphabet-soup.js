function AlphabetSoup(str) {
  str = str.toLowerCase()

  return str.split('').sort().join('')
}

console.log(AlphabetSoup('coderbyte'))
console.log(AlphabetSoup('hooplah'))
