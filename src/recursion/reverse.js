// Recursion - reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (!str.length) return ''

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}
console.log(reverse('awesome'))
console.log(reverse('rithmschool'))

function reverse2(str) {
  if (!str.length) return ''

  return reverse2(str.slice(1)) + str[0]
}
console.log(reverse2('awesome'))
console.log(reverse2('rithmschool'))
