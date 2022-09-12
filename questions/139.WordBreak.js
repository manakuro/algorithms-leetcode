/**
 * wordBreak - Dynamic Programming Bottom up
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const dp = [...(new Array(s.length) + 1)].fill(false)

  dp[s.length] = true

  // e.g. s = 'leetcode', wordDict = ['yeet', 'leet', 'code']
  // dp[8] = true
  // dp[7] = false        // i = 'e'
  // dp[6] = false        // i = 'd'
  // dp[5] = false        // i = 'o'
  // dp[4] = true (code)  // i = 'c' `code`
  // dp[3] = false        // i = 't'
  // dp[2] = false        // i = 'e'
  // dp[1] = false        // i = 'e'
  // dp[0] = dp[4] = true // i = 'l' `leet`

  // e.g. s = 'catsandog', wordDict = ["cats","dog","sand","and","cat"]
  // dp[9] = true
  // dp[8] = false                  // i = 'g'
  // dp[7] = false                  // i = 'o'
  // dp[6] = false                  // i = 'd' -> `dog`
  // dp[5] = true                   // i = 'n'
  // dp[4] = false                  // i = 'a'
  // dp[3] = false                  // i = 's'
  // dp[2] = false                  // i = 't'
  // dp[1] = false                  // i = 'a'
  // dp[0] = dp[4] || dp[3] = false // i = 'c' -> `cats` or `cat`
  for (let i = s.length - 1; i >= 0; i--) {
    for (const word of wordDict) {
      if (i + word.length > s.length) continue

      const isMatched = s.slice(i, i + word.length) === word
      if (isMatched) dp[i] = dp[i + word.length]
      if (dp[i]) break
    }
  }

  return dp[0]
}

console.log(wordBreak('leetcode', ['leet', 'code']))
