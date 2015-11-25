function DivisionStringfield (num1, num2) {
  var total = Math.round(num1 / num2)
  return total.toLocaleString()
}

console.log(DivisionStringfield(5, 2))
console.log(DivisionStringfield(6874, 67))
