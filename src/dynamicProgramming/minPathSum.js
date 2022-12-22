/**
 * Suppose we have a m by n matrix filled with non-negative integers, find a path from top left corner to bottom right corner which minimizes the sum of all numbers along its path.
 *
 * Note: Movements can only be either down or right at any point in time.
 *
 * Example:
 * Input:
 *   [
 *     [1,3,1],
 *     [1,5,1],
 *     [4,2,1]
 *   ]
 * Output: 7
 *
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const rows = grid.length
  const cols = grid[0].length

  const dp = [...new Array(rows).fill(null)].map(() =>
    [...new Array(cols)].fill(0),
  )
  dp[0][0] = grid[0][0]

  for (let c = 1; c < cols; c++) {
    dp[0][c] = dp[0][c - 1] + grid[0][c]
  }

  for (let r = 1; r < rows; r++) {
    dp[r][0] = dp[r - 1][0] + grid[r][0]
  }

  // dp[r][c] = min(cost to reach top cell, cost to reach left cell) + cost of current cell.
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + grid[r][c]
    }
  }

  return dp[rows - 1][cols - 1]
}
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
)
