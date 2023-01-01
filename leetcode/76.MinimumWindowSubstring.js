/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (t === '') return ''

  const tMap = {}
  const window = {}
  for (const char of t) {
    tMap[char] = (tMap[char] ?? 0) + 1
  }

  let have = 0
  let need = Object.keys(tMap).length
  let result = [-1, -1]
  let length = Infinity
  let left = 0

  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    window[char] = (window[char] ?? 0) + 1

    if (char in tMap && window[char] === tMap[char]) have++

    while (have === need) {
      if (right - left + 1 < length) {
        result = [left, right]
        length = right - left + 1
      }
      window[s[left]]--
      if (s[left] in tMap && window[s[left]] < tMap[s[left]]) have--
      left++
    }
  }
  if (length === Infinity) return ''

  const [l, r] = result
  return s.slice(l, r + 1)
}
console.log(minWindow('ADOBECODEBANC', 'ABC'))
// console.log(minWindow('a', 'a'))
// console.log(minWindow('a', 'aa'))
// console.log(minWindow('bba', 'ab'))
