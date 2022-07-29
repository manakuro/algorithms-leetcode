// Recursion - isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to
// it is a palindrome (reads the same forward and backward). Otherwise, it returns false.

function isPalindrome(str) {
  // return str === str.split("").reverse().join("")
  if (str.length === 1) return true
  if (str.length === 2) return str[0] === str[1]
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))

  return false
}
console.log(isPalindrome('tacocat')) // true
