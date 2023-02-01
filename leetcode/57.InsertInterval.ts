function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = []
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i]

    if (newInterval[1] < interval[0]) {
      result.push(newInterval)
      return [...result, ...intervals.slice(i)]
    }

    if (newInterval[0] > interval[1]) {
      result.push(interval)
      continue
    }

    newInterval = [
      Math.min(newInterval[0], interval[0]),
      Math.max(newInterval[1], interval[1]),
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
