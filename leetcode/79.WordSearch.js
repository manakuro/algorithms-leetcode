/**
 * exist - Backtracking
 *
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const rows = board.length
  const cols = board[0].length
  const path = new Set()

  const traverse = (r, c, i) => {
    if (i === word.length) return true
    if (r < 0) return false
    if (c < 0) return false
    if (r >= rows) return false
    if (c >= cols) return false
    if (word[i] !== board[r][c]) return false
    if (path.has(String([r, c]))) return false

    path.add(String([r, c]))

    const result =
      traverse(r + 1, c, i + 1) ||
      traverse(r - 1, c, i + 1) ||
      traverse(r, c + 1, i + 1) ||
      traverse(r, c - 1, i + 1)

    path.delete(String([r, c]))

    return result
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (traverse(r, c, 0)) return true
    }
  }

  return false
}
// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'))
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB',
  ),
)
