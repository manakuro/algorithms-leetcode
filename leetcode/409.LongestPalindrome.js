/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const map = s.split('').reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1
    return acc
  }, {})

  let count = 0
  for (const key in map) {
    count += Math.floor(map[key] / 2) * 2

    if (count % 2 === 0 && map[key] % 2 === 1) {
      count += 1
    }
  }
  return count
}

console.log(longestPalindrome('abccccdd'))
// console.log(longestPalindrome('bb'))
// console.log(longestPalindrome('ccc'))
// console.log(longestPalindrome('ccd'))
