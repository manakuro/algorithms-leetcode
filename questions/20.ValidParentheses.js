/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const stack = []
  for (const element of s) {
    if (map[element]) {
      stack.push(map[element])
      continue
    }
    if (stack[stack.length - 1] === element) {
      stack.pop()
      continue
    }

    return false
  }
  return stack.length === 0
}

console.log(isValid('({{{{}}}})')) // false
