function merge(intervals: number[][]): number[][] {
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
console.log(
  merge([
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
  ]),
)
