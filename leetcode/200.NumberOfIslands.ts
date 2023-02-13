function numIslands(grid: string[][]): number {
  const rows = grid.length
  const cols = grid[0].length
  const visited = new Set()
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  let islands = 0

  const dfs = (row: number, col: number) => {
    const queue: number[][] = []
    visited.add(String([row, col]))
    queue.push([row, col])

    while (queue.length) {
      const [r, c] = queue.shift() as number[]
      for (const direction of directions) {
        const neighborRow = r + direction[0]
        const neighborCol = c + direction[1]

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
        dfs(r, c)
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
