/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  const frequencyMap = {}
  let result = 0

  let left = 0
  for (let right = 0; right < s.length; right++) {
    const letter = s[right]
    frequencyMap[letter] = (frequencyMap[letter] ?? 0) + 1

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const longest = Math.max(...Object.values(frequencyMap))
      const window = right - left + 1
      const isValidWindow = window - longest > k

      // e.g. ABAB
      // longest = 2
      // window = 4
      // k = 2
      // isValidWindow = 4 - 2 > 2
      if (!isValidWindow) break

      frequencyMap[s[left]]--
      left++
    }

    const window = right - left + 1
    result = Math.max(result, window)
  }

  return result
}

console.log(characterReplacement('ABAB', 2))
// console.log(characterReplacement('AABABBA', 1))
