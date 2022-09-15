/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const result = []
  let left = 0
  let right = matrix[0].length
  let top = 0
  let bottom = matrix.length

  while (left < right && top < bottom) {
    // top row
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i])
    }
    top++

    // right column
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1])
    }
    right--

    if (!(left < right && top < bottom)) break

    // right to left in bottom row
    for (let i = right - 1; i >= left; i--) {
      result.push(matrix[bottom - 1][i])
    }
    bottom--

    // bottom to top in left
    for (let i = bottom - 1; i >= top; i--) {
      result.push(matrix[i][left])
    }
    left++
  }

  return result
}
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
)
