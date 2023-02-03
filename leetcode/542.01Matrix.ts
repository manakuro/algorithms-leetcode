function updateMatrix(mat: number[][]): number[][] {
  const rows = mat.length
  const cols = mat[0].length
  const queue: number[][] = []
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const result = [...new Array(rows)].map(() => [...new Array(cols)].fill(0))
  const visited = new Set()

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c])
        visited.add(String([r, c]))
      }
    }
  }

  let distance = 0
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [r, c] = queue.shift()!

      if (mat?.[r]?.[c] === 1) {
        result[r][c] = distance
      }

      for (const direction of directions) {
        const neighborRow = r + direction[0]
        const neighborCol = c + direction[1]

        if (neighborRow < 0) continue
        if (neighborRow > rows) continue
        if (neighborCol < 0) continue
        if (neighborCol > cols) continue
        if (visited.has(String([neighborRow, neighborCol]))) continue

        queue.push([neighborRow, neighborCol])
        visited.add(String([neighborRow, neighborCol]))
      }
    }
    distance++
  }

  return result
}

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
)
