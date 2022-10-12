/**
 * You are given an m x n grid where each cell can have one of three values:
 *
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 *
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  const queue = []
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

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh++
      if (grid[r][c] === 2) queue.push([r, c])
    }
  }

  while (queue.length) {
    const [r, c] = queue.shift()
    for (const direction of directions) {
      const neighborRow = r + direction[0]
      const neighborCol = c + direction[1]

      if (neighborRow < 0) continue
      if (neighborRow >= rows) continue
      if (neighborCol < 0) continue
      if (neighborCol >= cols) continue

      if (grid[neighborRow][neighborCol] === 1) {
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
