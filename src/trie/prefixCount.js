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

  /**
   *
   * @param {string} s
   * @param {number} index
   * @return {number}
   */
  prefixCount(s, index) {
    // reached end of prefix, terminate by returning the value
    if (s.length === index) return this.frequency
    // go to the children if it exists
    if (this.children.has(s.charAt(index))) {
      return this.children.get(s.charAt(index)).prefixCount(s, index + 1)
    } else {
      // if character is not in children, then our dictionary does not have prefix, so return 0
      return 0
    }
  }
}

/**
 *
 * @param {string[]} words
 * @param {string[]} prefixes
 * @return {number[]}
 */
function prefixCount(words, prefixes) {
  const trie = new Node('$')
  for (const word of words) {
    trie.insert(word, 0)
  }

  const result = []
  for (const prefix of prefixes) {
    result.push(trie.prefixCount(prefix, 0))
  }

  return result
}
console.log(
  prefixCount(['forgot', 'for', 'algoman', 'while'], ['fo', 'forg', 'algo']),
)
