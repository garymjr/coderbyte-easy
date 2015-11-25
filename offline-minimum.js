function OfflineMinimum (strArr) {
  var count = 0
    , nums = []

  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] != 'E') {
      nums.push(strArr[i])
    } else {
      count++
    }
  }
 return nums.slice(0, count).join(',')
}

console.log(OfflineMinimum(['1', '2', 'E', 'E', '3']))
console.log(OfflineMinimum(['4', 'E', '1', 'E', '2', 'E', '3', 'E']))
