class TrieNode {
  children: Record<string, TrieNode> = {}
  isEndOfWord: boolean = false
}

class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let current = this.root

    for (const wordElement of word) {
      if (!current.children[wordElement]) {
        current.children[wordElement] = new TrieNode()
      }
      current = current.children[wordElement]
    }
    current.isEndOfWord = true
  }

  search(word: string): boolean {
    let current = this.root

    for (const wordElement of word) {
      if (!current.children[wordElement]) return false
      current = current.children[wordElement]
    }

    return current.isEndOfWord
  }

  startsWith(prefix: string): boolean {
    let current = this.root

    for (const wordElement of prefix) {
      if (!current.children[wordElement]) return false
      current = current.children[wordElement]
    }

    return true
  }
}

const obj = new Trie()
obj.insert('apple')
obj.search('apple')
obj.search('app')
obj.startsWith('app')
