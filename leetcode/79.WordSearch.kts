class Solution {
  fun exist(board: Array<CharArray>, word: String): Boolean {
    val rows = board.size
    val cols = board[0].size
    val path = mutableSetOf<Pair<Int, Int>>()


    fun dfs(r: Int, c: Int, i: Int): Boolean {
      if (i == word.length) {
        return true
      }
      if (r < 0) {
        return false
      }
      if (c < 0) {
        return false
      }
      if (r >= rows) {
        return false
      }
      if (c >= cols) {
        return false
      }

      if (word[i] != board[r][c]) {
        return false
      }

      if (Pair(r, c) in path) {
        return false
      }

      path.add(Pair(r, c))

      val result = dfs(r+1, c, i + 1) || dfs(r-1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c-1, i + 1)

      path.remove(Pair(r, c))

      return result
    }

    for (r in 0 until rows) {
      for (c in 0 until cols) {
        if (dfs(r, c, 0)) {
          return true
        }
      }
    }

    return false
  }
}
