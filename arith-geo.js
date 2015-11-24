function ArithGeo(arr) {
  var isArith = false
    , isGeo = false
    , arith = arr[1] - arr[0]
    , geo = arr[1] / arr[0]

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arith === arr[i+1]) {
      isArith = true
      isGeo = false
    } else if (arr[i] * geo === arr[i+1]) {
      isArith = false
      isGeo = true
    } else {
      isArith = false
      isGeo = false
    }
  }

  if (isArith) {
    return 'Arithmetic'
  } else if (isGeo) {
    return 'Geometric'
  } else {
    return -1
  }
}

console.log(ArithGeo([5, 10, 15]))
console.log(ArithGeo([2, 4, 16, 24]))
