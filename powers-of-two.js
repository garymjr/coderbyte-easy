function PowersOfTwo (num) {
  while (num % 2 == 0 && num > 1) {
    num /= 2
    if (num === 2) {
      return true
    } else {
      return false
    }
  }
}

console.log(PowersOfTwo(4))
console.log(PowersOfTwo(124))
