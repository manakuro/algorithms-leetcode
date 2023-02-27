function longestPalindrome(s: string): string {
  let result = ''
  let length = 0

  for (let i = 0; i < s.length; i++) {
    let left = i
    let right = i

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > length) {
        result = s.slice(left, right + 1)
        length = right - left + 1
      }
      left--
      right++
    }

    left = i
    right = i + 1
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > length) {
        result = s.slice(left, right + 1)
        length = right - left + 1
      }
      left--
      right++
    }
  }

  return result
}
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('a'))
