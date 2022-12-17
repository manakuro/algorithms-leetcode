/**
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.
 *
 * @example
 * Input:
 * intervals = [[0,30],[5,10],[15,20]]
 *
 * Output:
 * false
 *
 * @param {number[][]}intervals
 * @return {boolean}
 */
function meetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) return false
  }

  return true
}

// true
console.log(
  meetingRooms([
    [7, 10],
    [2, 4],
  ]),
)
