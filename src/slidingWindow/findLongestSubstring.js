// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a sting and returns the length of the longest substring
// with all distinct characters.
// ex.)
//  "hello" contains only 4 distinct characters.
//  "absgj" contains 5 distinct characters.

function findLongestSubstring(str) {
  if (!str) return 0

  const obj = {}
  let longest = 0
  let start = 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (obj[char]) {
      start = Math.max(start, obj[char])
    }

    longest = Math.max(longest, i - start + 1)
    obj[char] = i + 1
  }

  return longest
}

console.log(findLongestSubstring(''))
console.log(findLongestSubstring('rithmschool'))
console.log(findLongestSubstring('thisisawesome'))
console.log(findLongestSubstring('thecatinthehat'))
console.log(findLongestSubstring('bbbbbb'))
console.log(findLongestSubstring('longestsubstring'))
console.log(findLongestSubstring('thisishowwedoit'))
