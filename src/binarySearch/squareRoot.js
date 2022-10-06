/**
 *
 * @param {number} n
 * @return {number}
 */
function squareRoot(n) {
  if (n === 0) return 0

  let start = 1
  let end = n
  let result = -1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const value = middle * middle
    if (value <= n) {
      start = middle + 1
      result = middle
    } else {
      end = middle - 1
    }
  }
  return result
}

console.log(squareRoot(16)) // 4
