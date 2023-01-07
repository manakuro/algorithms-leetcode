function isValid(s: string): boolean {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  } as const
  type Key = keyof typeof map

  const stack = []

  for (const element of s) {
    if (map[element as Key]) {
      stack.push(map[element as Key])
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
