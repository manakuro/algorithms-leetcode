function myAtoi(s: string) {
  let result = 0
  let sign = 1
  let found = false

  const addNumber = (n: number, val: string) => n * 10 + Number(val)

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const isWhiteSpace = char === ' '
    const hasWhiteSpaceWithinNumbers = isWhiteSpace && found
    const isNumeric = char >= '0' && char <= '9'
    const isPlusSign = char === '+'
    const isMinusSign = char === '-'

    if (hasWhiteSpaceWithinNumbers) break
    if (isWhiteSpace) continue

    if (isNumeric) {
      found = true
      result = addNumber(result, char)
      continue
    }

    if (isPlusSign && !found) {
      found = true
      continue
    }

    if (isMinusSign && !found) {
      found = true
      sign *= -1
      continue
    }

    break
  }

  result *= sign
  return Math.min(Math.max(-(2 ** 31), result), 2 ** 31 - 1)
}
console.log(myAtoi('   +0 123'))

function myAtoiByParseInt(s: string) {
  const trimmed = s.trim()
  if (trimmed === '') return 0

  const int = parseInt(trimmed, 10)
  if (isNaN(int)) return 0

  const min = Math.pow(-2, 31)
  if (int < min) return min

  const max = Math.pow(2, 31) - 1
  if (int > max) return max

  return int
}
console.log(myAtoiByParseInt('     4193 with words    '))
