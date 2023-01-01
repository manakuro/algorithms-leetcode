/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let left = 0
  let result = 0

  for (let right = 0; right < s.length; right++) {
    // e.g. `pww`
    //  forward the left to `w` index.
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    result = Math.max(result, right - left + 1)
  }

  return result
}
console.log(lengthOfLongestSubstring('pwwkew'))
