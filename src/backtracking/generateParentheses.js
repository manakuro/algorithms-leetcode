/**
 * Given an integer n, generate all strings with n matching parentheses. "matching" parentheses mean
 *  - there is equal number of opening and closing parentheses.
 *  - each opening parenthesis has matching closing parentheses.
 *
 * For example, () is a valid string but )( is not a valid string because ) has no matching parenthesis before it and ( has no matching parenthesis after it.
 *
 * @param n {number}
 */
function generateParentheses(n) {
  const result = []

  /**
   *
   * @param startIndex {number}
   * @param current {string[]}
   * @param openCount {number}
   * @param closeCount {number}
   */
  const dfs = (startIndex, current, openCount, closeCount) => {
    if (startIndex === 2 * n) {
      result.push(current.join(''))
      return
    }

    if (openCount < n) {
      current.push('(')
      dfs(startIndex + 1, current, openCount + 1, closeCount)
      current.pop()
    }
    if (closeCount < openCount) {
      current.push(')')
      dfs(startIndex + 1, current, openCount, closeCount + 1)
      current.pop()
    }
  }

  dfs(0, [], 0, 0)

  return result
}
console.log(generateParentheses(3))
