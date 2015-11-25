function MultiplicativePersistence (num) {
  var str
    , count = 0

  while (num.toString().length > 1) {
    str = num.toString().split('')
    num = 1
    str.forEach(function (n) {
      num *= Number(n)
    })
    count++
  }
 return count
}

console.log(MultiplicativePersistence(4))
console.log(MultiplicativePersistence(25))
