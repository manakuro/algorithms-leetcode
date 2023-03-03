function letterCombinations(digits: string): string[] {
  const result: string[] = []
  const map: Record<number, string> = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const dfs = (startIndex: number, path: string[]) => {
    if (startIndex === digits.length) {
      result.push(path.join(''))
      return
    }

    const words = map[Number(digits[startIndex])]
    for (const word of words) {
      path.push(word)
      dfs(startIndex + 1, path)
      path.pop()
    }
  }

  dfs(0, [])

  return result
}
console.log(letterCombinations('23'))
