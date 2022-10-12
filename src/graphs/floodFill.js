/**
 * @param {number} r
 * @param {number} c
 * @param {number} replacement
 * @param {number[][]} image
 * @return {number[][]}
 */
function floodFill(r, c, replacement, image) {
  const rows = image.length
  const cols = image[0].length
  const queue = []
  const visited = [...new Array(rows)].map(() =>
    [...new Array(cols)].fill(false),
  )
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  const color = image[r][c]
  image[r][c] = replacement
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
      if (image[neighborRow][neighborCol] !== color) continue

      image[neighborRow][neighborCol] = replacement
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

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill2 = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image

  floodFill2.fill(image, sr, sc, image[sr][sc], color)

  return image
}
floodFill2.fill = (image, sr, sc, prevColor, color) => {
  if (sr < 0) return
  if (sc < 0) return
  if (sr >= image.length) return
  if (sc >= image[0].length) return
  if (image[sr][sc] !== prevColor) return

  image[sr][sc] = color
  floodFill2.fill(image, sr - 1, sc, prevColor, color)
  floodFill2.fill(image, sr + 1, sc, prevColor, color)
  floodFill2.fill(image, sr, sc - 1, prevColor, color)
  floodFill2.fill(image, sr, sc + 1, prevColor, color)
}
// [ [ 2, 2, 2 ], [ 2, 2, 0 ], [ 2, 0, 1 ] ]
console.log(
  floodFill2(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
)
