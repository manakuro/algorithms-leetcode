function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const rows = image.length
  const cols = image[0].length
  const queue: number[][] = []
  const visited = [...new Array(rows)].map(() =>
    [...new Array(cols)].fill(false),
  )
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  const target = image[sr][sc]
  image[sr][sc] = color
  visited[sr][sc] = true

  queue.push([sr, sc])
  while (queue.length) {
    const [row, col] = queue.shift()!
    for (const direction of directions) {
      const neighborRow = row + direction[0]
      const neighborCol = col + direction[1]

      if (neighborRow < 0) continue
      if (neighborRow >= rows) continue
      if (neighborCol < 0) continue
      if (neighborCol >= cols) continue
      if (visited[neighborRow][neighborCol]) continue
      if (image[neighborRow][neighborCol] !== target) continue

      image[neighborRow][neighborCol] = color
      queue.push([neighborRow, neighborCol])
      visited[neighborRow][neighborCol] = true
    }
  }

  return image
}

const res = floodFill(2, 2, 9, [
  [0, 1, 3, 4, 1],
  [3, 8, 8, 3, 3],
  [6, 7, 8, 8, 3],
  [12, 2, 8, 9, 1],
  [12, 3, 1, 3, 2],
])
// [[0,1,3,4,1],[3,9,9,3,3],[6,7,9,9,3],[12,2,9,9,1],[12,3,1,3,2]]
console.log(res)
