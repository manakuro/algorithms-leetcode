/**
 * ladderLength - BFS
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0

  const neighbors = {}

  wordList.push(beginWord)

  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + '*' + word.slice(i + 1)
      neighbors[pattern] ||= []
      neighbors[pattern].push(word)
    }
  }

  const visit = new Set()
  visit.add([beginWord])

  const queue = []
  queue.push(beginWord)
  let result = 1

  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const word = queue.shift()
      if (word === endWord) return result

      for (let j = 0; j < word.length; j++) {
        const pattern = word.slice(0, j) + '*' + word.slice(j + 1)
        for (const neighbor of neighbors[pattern]) {
          if (!visit.has(neighbor)) {
            visit.add(neighbor)
            queue.push(neighbor)
          }
        }
      }
    }
    result++
  }

  return 0
}
console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
)
