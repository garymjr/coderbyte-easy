function ThirdGreatest (strArr) {
  strArr = strArr.sort(function (a, b) {
    return b.length - a.length
  })
  return strArr[2]
}

console.log(ThirdGreatest(['coder', 'byte', 'code']))
console.log(ThirdGreatest(['abc', 'defg', 'z', 'hijk']))
