function findAnagrams(s: string, p: string): number[] {
  if (p.length > s.length) return []

  const pCount: Record<string, number> = {}
  const sCount: Record<string, number> = {}

  for (let i = 0; i < p.length; i++) {
    pCount[p[i]] = (pCount[p[i]] ?? 0) + 1
    sCount[s[i]] = (sCount[s[i]] ?? 0) + 1
  }

  const isEqual = (obj1: any, obj2: any): boolean => {
    for (const element in obj1) {
      if (!Object.prototype.hasOwnProperty.call(obj2, element)) return false
      if (obj2[element] !== obj1[element]) return false
    }
    return true
  }

  const result = isEqual(pCount, sCount) ? [0] : []
  let left = 0
  for (let right = p.length; right < s.length; right++) {
    sCount[s[right]] = (sCount[s[right]] ?? 0) + 1
    sCount[s[left]]--

    if (sCount[s[left]] === 0) {
      delete sCount[s[left]]
    }
    left++

    if (isEqual(sCount, pCount)) result.push(left)
  }

  return result
}
console.log(findAnagrams('cbaebabacd', 'abc'))
