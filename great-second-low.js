function GreatSecondLow (arr) {
  arr = arr.sort(function (a, b) { return a - b })

  if (arr.length === 2) {
    return arr[0] + ' ' + arr[1]
  } else if (arr.length === 3) {
    return arr[1]
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i+1]) {
        for (var j = arr.length -1; j >= 0; j--) {
          if (arr[j] != arr[j-1]) return arr[i+1] + ' ' + arr[j-1]
        }
      }
    }
  }
}

console.log(GreatSecondLow([1, 42, 42, 180]))
console.log(GreatSecondLow([4, 90]))
