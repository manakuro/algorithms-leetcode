function calculate(s: string): number {
  if (s.length === 0) return 0

  let sign = 1
  let sum = 0
  const stack: number[] = []

  for (let i = 0; i < s.length; i++) {
    const n = s[i]

    if (!isNaN(parseInt(n))) {
      let num = parseInt(n)

      while (i + 1 < s.length && !isNaN(parseInt(s[i + 1]))) {
        num = num * 10 + parseInt(s[i + 1])
        i++
      }

      sum += num * sign
    }

    if (n === '+') sign = 1
    if (n === '-') sign = -1

    if (n === '(') {
      stack.push(sum)
      stack.push(sign)
      sum = 0
      sign = 1
    }
    if (n === ')') {
      const prevSign = stack.pop()!
      const prevSum = stack.pop()!
      sum = prevSign * sum
      sum += prevSum
    }
  }

  return sum
}
console.log(calculate('(1+(4+5+2)-3)+(6+8)'))
