function wordBreak(s: string, wordDict: string[]): boolean {
  const map = new Map<number, boolean>()

  const dfs = (i: number): boolean => {
    if (map.has(i)) return map.get(i)!
    if (i > s.length - 1) return true

    let isMatched = false
    for (const word of wordDict) {
      const length = word.length
      if (s.slice(i, i + length) === word) {
        const nextMatched = dfs(i + length)
        if (nextMatched) {
          isMatched = true
          break
        }
      }
    }
    map.set(i, isMatched)
    return isMatched
  }

  return dfs(0)
}
console.log(wordBreak('leetcode', ['leet', 'code']))
