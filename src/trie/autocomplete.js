class Node {
  constructor(value) {
    this.value = value
    this.frequency = 0

    /**
     * @type {Map<string, Node>}
     */
    this.children = new Map()
  }
  /**
   *
   * @param {string} s
   * @param {number} index
   */
  insert(s, index) {
    this.frequency += 1
    if (index !== s.length) {
      if (this.children.has(s.charAt(index))) {
        this.children.get(s.charAt(index)).insert(s, index + 1)
      } else {
        this.children.set(s.charAt(index), new Node(s.charAt(index)))
        this.children.get(s.charAt(index)).insert(s, index + 1)
      }
    }
  }

  /**
   *
   * @param {string} s
   * @param {number} index
   * @return {number}
   */
  query(s, index) {
    if (s.length === index) return 0
    if (this.frequency === 1) return 0

    return this.children.get(s.charAt(index)).query(s, index + 1) + 1
  }
}

/**
 *
 * @param {string[]} words
 * @return {number}
 */
function autocomplete(words) {
  const trie = new Node()
  let total = 0
  for (const word of words) {
    trie.insert(word, 0)
    total += trie.query(word, 0)
  }

  return total + 1
}

// 11
console.log(autocomplete(['hi', 'hello', 'bojack', 'hills', 'hill']))
