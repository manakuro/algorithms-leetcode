/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
  const result = []

  for (let i = 0; i < intervals.length; i++) {
    // e.g. insert([[6,7], [8,9]], [2,5])
    // [[2,5], [6,7], [8,9]]
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval)
      return [...result, ...intervals.slice(i)]
    }

    // e.g. insert([[1,3], [6,9]], [4,5])
    // [[1,3]]
    if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i])
      continue
    }

    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1]),
    ]
  }

  result.push(newInterval)

  return result
}
console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
)
console.log(
  insert(
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
