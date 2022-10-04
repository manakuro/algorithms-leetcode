/**
 * Given a non-empty string of digits, how many ways are there to decode it?
 *
 * @param {string} digits
 * @return {number}
 */
function decodeWays(digits) {
  /**
   *
   * @param {number} startIndex
   * @return {number}
   */
  const dfs = (startIndex) => {
    if (startIndex === digits.length) return 1

    let result = 0
    if (digits[startIndex] === '0') {
      return result
    }

    result += dfs(startIndex + 1)
    if (
      startIndex + 2 <= digits.length &&
      parseInt(digits.substring(startIndex, startIndex + 2)) <= 26
    ) {
      result += dfs(startIndex + 2)
    }

    return result
  }

  return dfs(0)
}

console.log(decodeWays('18'))
