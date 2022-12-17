/**
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 *
 * You may assume that the intervals were initially sorted according to their start times.
 *
 * @example
 * Input:
 * intervals = [[1,3],[6,9]]
 * newInterval = [2,5]
 *
 * Output:
 * [[1,5],[6,9]]
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insertInterval(intervals, newInterval) {
  const result = []

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i]
    const [start, end] = interval

    // e.g. insertInterval([[6,7], [8,9]], [2,5])
    // [[2,5], [6,7], [8,9]]
    if (newInterval[1] < start) {
      result.push(newInterval)
      return [...result, ...intervals.slice(i)]
    }

    // e.g. insertInterval([[1,3], [6,9]], [4,5])
    // [[1,3]]
    if (newInterval[0] > end) {
      result.push(interval)
      continue
    }

    newInterval = [
      Math.min(newInterval[0], start),
      Math.max(newInterval[1], end),
    ]
  }

  result.push(newInterval)

  return result
}
// [[1, 2], [3, 10], [12, 16]]
console.log(
  insertInterval(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8],
  ),
)
