function AdditivePersistence (num) {
  var str
    , count = 0

  while (num.toString().length > 1) {
    str = num.toString().split('')
    num = 0
    str.forEach(function (n) {
      num += Number(n)
    })
    count++
  }
 return count
}

console.log(AdditivePersistence(4))
console.log(AdditivePersistence(19))
