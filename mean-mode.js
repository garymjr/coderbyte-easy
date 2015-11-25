function MeanMode (arr) {
  var mean = 0
    , modeCount = []
    , mode = 0

  arr = arr.sort(function (a, b) { return a - b })

  for (var i = 0; i < arr.length; i++) mean += arr[i]

  mean = mean / arr.length

  for (var i = 0; i < arr.length; i++) {
    modeCount[i] = 1
    for (var j = 0; j < arr.length; j++) {
      if (i != j & arr[i] === arr[j]) modeCount[i]++
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (modeCount[i] > modeCount[mode]) mode = i
  }

  if (arr[mode] === mean) {
    return 1
  } else {
    return 0
  }
}

console.log(MeanMode([1, 2, 3]))
console.log(MeanMode([4, 4, 4, 6, 2]))
