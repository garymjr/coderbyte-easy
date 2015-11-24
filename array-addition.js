function ArrayAddition(arr) {
  var max = arr.sort(function(a, b) { return a - b }).pop()
    , total = 0

  for (var i = 0; i < arr.length; i++) {
    total += arr[i]
    for (var j = 0; j < arr.length; j++) {
      if (i != j) {
        total += arr[j]
        if (total === max) return true
      }
    }

    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        total -= arr[k]
        if (total === max) return true
      }
    }
    total = 0
  }
  return false
}

console.log(ArrayAddition([5, 7, 16, 1, 2]))
console.log(ArrayAddition([3, 5, -1, 8, 12]))
