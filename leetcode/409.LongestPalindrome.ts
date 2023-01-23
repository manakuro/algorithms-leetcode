function longestPalindrome(s: string): number {
  const maps = s.split('').reduce((acc, v) => {
    acc[v] = (acc[v] ?? 0) + 1
    return acc
  }, {} as Record<string, number>)

  let count = 0
  for (const key in maps) {
    count += Math.floor(maps[key] / 2) * 2

    if (count % 2 === 0 && maps[key] % 2 === 1) {
      count += 1
    }
  }

  return count
}
console.log(longestPalindrome('abccccdd'))
