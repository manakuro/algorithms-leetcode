/**
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const dp = [...new Array(n)].map(() => [...new Array(m)].fill(1))

  for (let r = 1; r < n; r++) {
    for (let c = 1; c < m; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1]
    }
  }

  // [
  //  [ 1, 1, 1, 1, 1 ],
  //  [ 1, 2, 3, 4, 5 ],
  //  [ 1, 3, 6, 10, 15 ]
  // ]
  console.log(dp)

  return dp[n - 1][m - 1]
}

console.log(uniquePaths(5, 3)) // 15
