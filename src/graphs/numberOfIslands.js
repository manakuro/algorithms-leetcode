/**
 *
 * @param {number[][]} grid
 * @return {number}
 */
function countNumberOfIslands(grid) {
  const rows = grid.length
  const cols = grid[0].length
  const visited = [...new Array(rows)].map(() =>
    [...new Array(cols)].fill(false),
  )
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  let islands = 0

  /**
   * @param {number} r
   * @param {number} c
   */
  const traverse = (r, c) => {
    const queue = []
    visited[r][c] = true
    queue.push([r, c])

    while (queue.length) {
      const [row, col] = queue.shift()

      for (const direction of directions) {
        const neighborRow = row + direction[0]
        const neighborCol = col + direction[1]

        if (neighborRow < 0) continue
        if (neighborRow >= rows) continue
        if (neighborCol < 0) continue
        if (neighborCol >= cols) continue
        if (visited[neighborRow][neighborCol]) continue
        if (grid[neighborRow][neighborCol] !== 1) continue

        queue.push([neighborRow, neighborCol])
        visited[neighborRow][neighborCol] = true
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (visited[r][c]) continue

      if (grid[r][c] === 1) {
        traverse(r, c)
        islands++
      }
    }
  }

  return islands
}
console.log(
  countNumberOfIslands([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ]),
)
