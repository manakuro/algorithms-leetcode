/**
 * Given a string and a list of words, determine if the string can be constructed from concatenating words from the list of words.
 * A word can be used multiple times.
 *
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
function wordBreak(s, words) {
  const dp = {}

  /**
   *
   * @param {number} startIndex
   */
  const dfs = (startIndex) => {
    if (startIndex === s.length) return true

    if (dp[startIndex]) return dp[startIndex]

    let result = false
    for (const word of words) {
      if (s.slice(startIndex).startsWith(word)) {
        result = result || dfs(startIndex + word.length)
      }
    }

    dp[startIndex] = result
    return result
  }

  return dfs(0)
}

console.log(wordBreak('algomonster', ['algo', 'monster']))
