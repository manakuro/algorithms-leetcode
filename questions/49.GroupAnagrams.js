/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  if (!strs.length) return []

  /**
   * @type {Map<string, string[]>}
   */
  const map = new Map()

  for (const word of strs) {
    const count = new Array(26).fill(0)
    for (const char of word) {
      count[getCode(char)]++
    }
    const values = map.get(String(count)) || []
    values.push(word)
    map.set(String(count), values)
  }

  return [...map.values()]
}

/**
 *
 * @param {string} char
 * @return {number}
 */
const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0)

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
