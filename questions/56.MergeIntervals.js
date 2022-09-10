/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  // Sort the all first element by ascending order.
  // e.g.
  //  [[1,3],[8,10],[15,18], [2,6]]
  //  -> [[1,3],[2,6],[8,10],[15,18]]
  intervals.sort((a, b) => a[0] - b[0])

  let result = [intervals[0]]
  for (const interval of intervals.slice(1)) {
    const [start, end] = interval
    const lastEnd = result[result.length - 1][1]
    const isOverlapping = start <= lastEnd

    // If the last value is overlapping with the corresponding interval,
    // merge the last values.
    if (isOverlapping) {
      result[result.length - 1][1] = Math.max(lastEnd, end)
    } else {
      result.push([start, end])
    }
  }

  return result
}

console.log(
  merge([
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
  ]),
)
// console.log(merge([[1,4],[4,5]]))
// console.log(merge([[1,4],[0,0]]))
