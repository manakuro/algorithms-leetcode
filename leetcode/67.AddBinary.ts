function addBinary(a: string, b: string): string {
  let result = ''
  let carry = 0
  const max = Math.max(a.length, b.length)
  const padA = a.padStart(max, '0')
  const padB = b.padStart(max, '0')

  for (let i = max - 1; i >= 0; i--) {
    const numA = Number(padA[i] ?? 0)
    const numB = Number(padB[i] ?? 0)

    const total = numA + numB + carry
    const char = String(total % 2)
    result = char + result
    carry = Math.floor(total / 2)
  }

  if (carry) result = '1' + result

  return result
}
console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))
