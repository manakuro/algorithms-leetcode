/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
  const rows = mat.length
  const columns = mat[0].length
  const queue = []
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const result = [...new Array(rows)].map(() => [...new Array(columns)].fill(0))
  const visited = new Set()

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
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
      const [r, c] = queue.shift()

      if (mat?.[r]?.[c] === 1) {
        result[r][c] = distance
      }

      for (const direction of directions) {
        const neighborRow = r + direction[0]
        const neighborColumn = c + direction[1]

        if (neighborRow < 0) continue
        if (neighborRow > rows) continue
        if (neighborColumn < 0) continue
        if (neighborColumn > columns) continue
        if (visited.has(String([neighborRow, neighborColumn]))) continue

        queue.push([neighborRow, neighborColumn])
        visited.add(String([neighborRow, neighborColumn]))
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
