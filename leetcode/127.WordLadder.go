package leetcode

func ladderLength(beginWord string, endWord string, wordList []string) int {
	contain := false
	for _, w := range wordList {
		if w == endWord {
			contain = true
		}
	}
	if !contain {
		return 0
	}

	neighbors := make(map[string][]string)

	wordList = append(wordList, beginWord)

	for _, w := range wordList {
		for i := 0; i < len(w); i++ {
			pattern := w[0:i] + "*" + w[i+1:]
			if _, ok := neighbors[pattern]; !ok {
				neighbors[pattern] = []string{}
			}
			neighbors[pattern] = append(neighbors[pattern], w)
		}
	}

	visit := make(map[string]struct{})
	visit[beginWord] = struct{}{}

	var queue []string
	queue = append(queue, beginWord)
	result := 1

	for len(queue) > 0 {
		length := len(queue)
		for i := 0; i < length; i++ {
			word := queue[0]
			queue = queue[1:]

			if word == endWord {
				return result
			}

			for j := 0; j < len(word); j++ {
				pattern := word[0:j] + "*" + word[j+1:]
				for _, neighbor := range neighbors[pattern] {
					if _, ok := visit[neighbor]; !ok {
						visit[neighbor] = struct{}{}
						queue = append(queue, neighbor)
					}
				}
			}
		}
		result++
	}

	return 0
}
