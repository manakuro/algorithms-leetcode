package leetcode

type TrieNode struct {
	Children    map[string]*TrieNode
	isEndOfWord bool
}

type Trie struct {
	root *TrieNode
}

func (t *Trie) Insert(word string) {
	current := t.root

	for _, char := range word {
		_, ok := current.Children[string(char)]
		if !ok {
			current.Children[string(char)] = &TrieNode{
				Children:    make(map[string]*TrieNode),
				isEndOfWord: false,
			}
		}
		current = current.Children[string(char)]
	}
	current.isEndOfWord = true
}

func (t *Trie) Search(word string) bool {
	current := t.root

	for _, char := range word {
		_, ok := current.Children[string(char)]
		if !ok {
			return false
		}
		current = current.Children[string(char)]
	}

	return current.isEndOfWord
}

func (t *Trie) StartsWith(prefix string) bool {
	current := t.root

	for _, p := range prefix {
		_, ok := current.Children[string(p)]
		if !ok {
			return false
		}
		current = current.Children[string(p)]
	}

	return true
}
