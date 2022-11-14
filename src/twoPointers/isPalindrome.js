/**
 *
 * Determine whether a string is a palindrome, ignoring non-alphanumeric characters and case. Examples:
 *
 * Input: Do geese see God? Output: True
 *
 * Input: Was it a car or a cat I saw? Output: True
 *
 * Input: A brown fox jumping over Output: False
 *
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let letters = s.toLocaleLowerCase().replace(/[^a-z0-9]/gi, '')
  let left = 0
  let right = letters.length - 1
  while (left <= right) {
    if (letters[left] !== letters[right]) return false

    left++
    right--
  }

  return true
}

console.log(isPalindrome('Do geese see God?'))
