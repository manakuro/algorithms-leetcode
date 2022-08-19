/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const formatted = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
  let left = 0
  let right = formatted.length - 1

  while (left < right) {
    if (formatted[left] !== formatted[right]) return false
    left++
    right--
  }

  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('a.'))
