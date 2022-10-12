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
function minimumTotalDFSMemoization(triangle) {
  const memo = [...new Array(triangle.length)].map(() =>
    [...new Array(triangle.length)].fill(Infinity),
  )

  const dfs = (row, col) => {
    if (row === triangle.length) return 0
    if (memo[row][col] !== Infinity) return memo[row][col]

    const left = dfs(row + 1, col)
    const right = dfs(row + 1, col + 1)
    memo[row][col] = triangle[row][col] + Math.min(left, right)

    return memo[row][col]
  }

  return dfs(0, 0)
}

// 11
console.log(minimumTotalDFSMemoization([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
