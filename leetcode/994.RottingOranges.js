/**
 * orangesRotting - BFS
 *
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  const queue = []
  let time = 0
  let fresh = 0

  const rows = grid.length
  const cols = grid[0].length

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh++
      if (grid[r][c] === 2) queue.push([r, c])
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  while (queue.length && fresh > 0) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const popped = queue.shift()
      const [r, c] = popped

      for (const direction of directions) {
        const [dr, dc] = direction
        const neighborRow = dr + r
        const neighborCol = dc + c

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
