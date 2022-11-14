/**
 *
 * Given a string original and a string check, find the starting index of all substrings of original that is an anagram of check. The output must be sorted in ascending order.
 *
 * Parameters
 * original: A string
 * check: A string
 * Result
 * A list of integers representing the starting indices of all anagrams of check.
 *
 * Example 1
 * Input: original = "cbaebabacd", check = "abc"
 *
 * Output: [0, 6]
 *
 * Explanation: The substring from 0 to 2, "cba", is an anagram of "abc", and so is the substring from 6 to 8, "bac".
 *
 * Example 2
 * Input: original = "abab", check = "ab"
 *
 * Output: [0, 1, 2]
 *
 * Explanation: All substrings with length 2 from "abab" is an anagram of "ab".
 *
 * @param {string} original
 * @param {string} check
 * @return {number[]}
 */
function findAllAnagrams(original, check) {
  if (original.length < check.length) return []

  const result = []
  const checkCounter = Array(26).fill(0)
  const window = Array(26).fill(0)

  for (let i = 0; i < check.length; i++) {
    checkCounter[getCharNumber(check[i])]++
    window[getCharNumber(original[i])]++
  }
  if (equals(window, checkCounter)) result.push(0)

  for (let i = check.length; i < original.length; i++) {
    window[getCharNumber(original[i - check.length])]--
    window[getCharNumber(original[i])]++
    if (equals(window, checkCounter)) result.push(i - check.length + 1)
  }

  return result
}

/**
 *
 * @param {string} s
 * @return {number}
 */
function getCharNumber(s) {
  const a = 'a'.charCodeAt()
  return s.charCodeAt() - a
}

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {boolean}
 */
function equals(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i])
}

console.log(findAllAnagrams('cbaebabacd', 'abc'))
