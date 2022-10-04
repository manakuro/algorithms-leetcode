function letterCombinationsOfPhoneNumber(digits) {
  const result = []
  const max = digits.length

  const numbers = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }

  const traverse = (i, current) => {
    if (current.length === max) {
      result.push(current.join(''))
      return
    }
    if (i >= digits.length) return

    const digit = digits[i]
    const words = numbers[digit]

    for (let j = 0; j < words.length; j++) {
      const word = words[j]
      current.push(word)
      traverse(i + 1, current)
      current.pop()
    }
  }

  traverse(0, [])

  return result
}

console.log(letterCombinationsOfPhoneNumber('56')) // [ 'jm', 'jn', 'jo', 'km', 'kn', 'ko', 'lm', 'ln', 'lo' ]
