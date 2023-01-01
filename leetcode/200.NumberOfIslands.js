/**
 * numIslands - Graph
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  if (!grid.length) return 0

  const rows = grid.length
  const cols = grid[0].length
  const visited = new Set()
  let islands = 0

  const traverse = (row, col) => {
    const queue = []
    visited.add(String([row, col]))
    queue.push([row, col])

    const directions = [
      [1, 0], // bottom
      [-1, 0], // top
      [0, 1], // right
      [0, -1], // left
    ]
    while (queue.length) {
      const popped = queue.shift()
      const [r, c] = popped

      for (const direction of directions) {
        const [dr, dc] = direction
        const neighborRow = r + dr
        const neighborCol = c + dc

        if (visited.has(String([neighborRow, neighborCol]))) continue

        if (grid[neighborRow]?.[neighborCol] === '1') {
          queue.push([neighborRow, neighborCol])
          visited.add(String([neighborRow, neighborCol]))
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (visited.has(String([r, c]))) continue

      if (grid[r][c] === '1') {
        traverse(r, c)
        islands++
      }
    }
  }

  return islands
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]),
)
