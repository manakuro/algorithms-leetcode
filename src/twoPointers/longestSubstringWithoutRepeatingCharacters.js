/**
 * Find the length of the longest substring of a given string without repeating characters.
 *
 * Input: abccabcabcc
 *
 * Output: 3
 *
 * Explanation: longest substrings are abc, cab, both of length 3
 *
 * Input: aaaabaaa
 *
 * Output: 2
 *
 * Explanation: ab is the longest substring, length 2
 *
 * @param {string} s
 * @return {number}
 */
function longestSubstringWithoutRepeatingCharacters(s) {
  let longest = 0
  let left = 0
  let right = 0
  const set = new Set()

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      right++
    } else {
      set.delete(s[left])
      left++
    }
    longest = Math.max(longest, right - left)
  }

  return longest
}
console.log(longestSubstringWithoutRepeatingCharacters('abccabcabcc'))
