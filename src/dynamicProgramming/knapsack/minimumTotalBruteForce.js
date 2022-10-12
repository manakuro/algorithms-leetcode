/**
 * The problem is to find the minimum path sum from top to bottom if given a triangle. Each step you may move to adjacent numbers on the row below.
 *
 * Input
 * triangle: see example
 * Output
 * the minimum path sum
 *
 * Example 1:
 * Input:
 *
 * triangle = [
 *      [2],
 *     [3,4],
 *    [6,5,7],
 *   [4,1,8,3]
 * ]
 * Output: 11
 *
 * Explanation:
 *
 * The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11.
 *
 * @param {number[][]}triangle
 * @return {number}
 */
function minimumTotalBruteForce(triangle) {
  const dfs = (row, col) => {
    if (row === triangle.length) {
      return 0
    }

    const left = dfs(row + 1, col)
    const right = dfs(row + 1, col + 1)
    return triangle[row][col] + Math.min(left, right)
  }

  return dfs(0, 0)
}

// 11
console.log(minimumTotalBruteForce([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
