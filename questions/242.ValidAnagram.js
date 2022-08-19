/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const sMap = s.split('').reduce((acc, str) => {
    acc[str] = 1 + (acc[str] || 0)
    return acc
  }, {})

  const tMap = t.split('').reduce((acc, str) => {
    acc[str] = 1 + (acc[str] || 0)
    return acc
  }, {})

  for (const key in sMap) {
    if (sMap[key] !== tMap[key]) return false
  }

  return true
}
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('anagram', 'nagaram'))
