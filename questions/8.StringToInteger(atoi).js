/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  let result = 0
  let sign = 1
  let found = false

  /**
   * @param {string} str
   * @return {number}
   */
  const toNumber = (str) => str - 0

  /**
   * @param {number} n
   * @param {string} val
   * @return {number}
   */
  const addNumber = (n, val) => n * 10 + toNumber(val)

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const isWhiteSpace = char === ' '
    const hasWhiteSpaceWithinNumbers = isWhiteSpace && found
    const isNumeric = char >= '0' && char <= '9'
    const isPlusSign = char === '+'
    const isMinusSign = char === '-'

    if (hasWhiteSpaceWithinNumbers) break
    if (isWhiteSpace) continue

    if (isNumeric) {
      found = true
      result = addNumber(result, char)
      continue
    }

    if (isPlusSign && !found) {
      found = true
      continue
    }

    if (isMinusSign && !found) {
      found = true
      sign *= -1
      continue
    }

    break
  }

  result *= sign
  return Math.min(Math.max(-(2 ** 31), result), 2 ** 31 - 1)
}
console.log(myAtoi('   +0 123'))

/**
 * @param {string} s
 * @return {number}
 */
function myAtoiByParseInt(s) {
  const trimmed = s.trim()
  if (trimmed === '') return 0

  const int = parseInt(trimmed, 10)
  if (isNaN(int)) return 0

  const min = Math.pow(-2, 31)
  if (int < min) return min

  const max = Math.pow(2, 31) - 1
  if (int > max) return max

  return int
}
console.log(myAtoiByParseInt('     4193 with words    '))
