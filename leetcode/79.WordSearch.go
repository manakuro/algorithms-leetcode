package leetcode

func exist(board [][]byte, word string) bool {
	rows := len(board)
	cols := len(board[0])
	path := map[string]struct{}{}
	var traverse func(r, c, i int) bool

	traverse = func(r, c, i int) bool {
		if i == len(word) {
			return true
		}
		if r < 0 {
			return false
		}
		if c < 0 {
			return false
		}
		if r >= rows {
			return false
		}
		if c >= cols {
			return false
		}

		if string(word[i]) != string(board[r][c]) {
			return false
		}

		if _, ok := path[toSetKey(r, c)]; ok {
			return false
		}

		path[toSetKey(r, c)] = struct{}{}

		result := traverse(r+1, c, i+1) ||
			traverse(r-1, c, i+1) ||
			traverse(r, c+1, i+1) ||
			traverse(r, c-1, i+1)

		delete(path, toSetKey(r, c))

		return result
	}

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if traverse(r, c, 0) {
				return true
			}
		}
	}

	return false
}
