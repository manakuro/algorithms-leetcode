/**
 * letterCombinations - Backtracking
 *
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const result = []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const backtrack = (i, current) => {
    if (current.length === digits.length) {
      result.push(current)
      return
    }

    const letters = map[digits[i]]
    for (let letter of letters) {
      backtrack(i + 1, current + letter)
    }
  }

  if (digits.length) backtrack(0, '')

  return result
}

console.log(letterCombinations('23'))
