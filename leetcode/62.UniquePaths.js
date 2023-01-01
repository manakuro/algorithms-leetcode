/**
 * uniquePaths - Dynamic Programming
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// e.g. m = 3, n = 7
// |robot|21|15|10|6|3|1|
// |7    |6 |5 |4 |3|2|1|
// |1    |1 |1 |1 |1|1|1| <- goal
//
// robot = (right + bottom) = 28
const uniquePaths = function (m, n) {
  // bottom row
  let row = [...new Array(n)].fill(1)

  // (m-1) -> except bottom row
  for (let i = 0; i < m - 1; i++) {
    const newRow = [...new Array(n)].fill(1)
    for (let j = n - 2; j >= 0; j--) {
      // right value + bottom value
      newRow[j] = newRow[j + 1] + row[j]
    }
    row = newRow
  }

  return row[0]
}
console.log(uniquePaths(3, 7))
