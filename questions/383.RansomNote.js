/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const ransomNoteMap = ransomNote.split('').reduce((acc, s) => {
    acc[s] = (acc[s] || 0) + 1
    return acc
  }, {})

  const magazineMap = magazine.split('').reduce((acc, s) => {
    acc[s] = (acc[s] || 0) + 1
    return acc
  }, {})

  for (const element of ransomNote) {
    if (!magazineMap[element]) return false
    if (magazineMap[element] < ransomNoteMap[element]) return false
  }
  return true
}

console.log(canConstruct('aab', 'aa'))
