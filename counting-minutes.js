function CountingMinutes (str) {
  var start, end, totalMin
  str = str.split('-')

  start = convertTime(str[0])
  end = convertTime(str[1])

  function convertTime (time) {
    time = time.split(':')
    var hour = Number(time[0])
    var min = Number(time[1].replace(/[A-Za-z]/g, ''))
    var ampm = time[1].replace(/[\d]/g, '')

    if (ampm === 'pm' && hour != 12) {
      hour = hour + 12
    } else if (ampm === 'am' && hour === 12) {
      hour = 24
    }
    return [hour, min, ampm]
  }
  totalMin = ((end[0] * 60) + end[1]) - ((start[0] * 60) + start[1])

  if (totalMin < 0) totalMin = totalMin + 1440
  return totalMin
}

console.log(CountingMinutes('12:30pm-12:00am'))
console.log(CountingMinutes('1:23am-1:08am'))
