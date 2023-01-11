function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const sMap = s.split('').reduce((acc, v) => {
    acc[v] = (acc[v] ?? 0) + 1
    return acc
  }, {} as Record<string, number>)

  const tMap = t.split('').reduce((acc, v) => {
    acc[v] = (acc[v] ?? 0) + 1
    return acc
  }, {} as Record<string, number>)

  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] !== tMap[s[i]]) return false
  }

  return true
}
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('anagram', 'nagaram'))
