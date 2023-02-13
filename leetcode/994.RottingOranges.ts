function orangesRotting(grid: number[][]): number {
  const rows = grid.length
  const cols = grid[0].length
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  let time = 0
  let fresh = 0
  const queue: number[][] = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh++
      if (grid[r][c] === 2) queue.push([r, c])
    }
  }

  while (queue.length && fresh > 0) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [row, col] = queue.shift()!
      for (const direction of directions) {
        const neighborRow = row + direction[0]
        const neighborCol = col + direction[1]

        if (grid[neighborRow]?.[neighborCol] !== 1) continue

        grid[neighborRow][neighborCol] = 2
        queue.push([neighborRow, neighborCol])
        fresh--
      }
    }
    time++
  }

  if (fresh !== 0) return -1

  return time
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
)
