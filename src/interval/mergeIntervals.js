/**
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * @example:
 *
 * Input:
 * intervals = [[1,3],[2,6],[8,10],[15,18]]
 *
 * Output:
 * [[1,6],[8,10],[15,18]]
 *
 * @param {number[][]}intervals
 * @return {number[][]}
 */
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let result = [intervals[0]]
  for (const interval of intervals.slice(1)) {
    const [start, end] = interval
    const lastEnd = result[result.length - 1][1]
    const isOverlapping = start <= lastEnd

    if (isOverlapping) {
      result[result.length - 1][1] = Math.max(lastEnd, end)
    } else {
      result.push([start, end])
    }
  }

  return result
}

// [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
)
