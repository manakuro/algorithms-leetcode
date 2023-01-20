function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteMaps = ransomNote.split('').reduce((acc, v) => {
    acc[v] = (acc[v] ?? 0) + 1
    return acc
  }, {} as Record<string, number>)

  const magazineMaps = magazine.split('').reduce((acc, v) => {
    acc[v] = (acc[v] ?? 0) + 1
    return acc
  }, {} as Record<string, number>)

  for (const ransomNoteElement of ransomNote) {
    if (!magazineMaps[ransomNoteElement]) return false
    if (magazineMaps[ransomNoteElement] < ransomNoteMaps[ransomNoteElement])
      return false
  }

  return true
}
console.log(canConstruct('aab', 'aa'))
