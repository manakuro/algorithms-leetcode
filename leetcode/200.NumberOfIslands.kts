class Solution {
  fun numIslands(grid: Array<CharArray>): Int {
    val rows = grid.size
    val cols = grid[0].size
    val visited = mutableSetOf<Pair<Int, Int>>()
    val directions = listOf(1 to 0, -1 to 0, 0 to 1, 0 to -1)

    fun dfs(row: Int, col: Int) {
      val queue = mutableListOf<Pair<Int, Int>>()
      visited.add(row to col)
      queue.add(row to col)

      while (queue.isNotEmpty()) {
        val (r, c) = queue.removeAt(0)
        for ((dr, dc) in directions) {
          val neighborRow = r + dr
          val neighborCol = c + dc

          if (visited.contains(neighborRow to neighborCol)) continue

          if (neighborRow in 0 until rows && neighborCol in 0 until cols && grid[neighborRow][neighborCol] == '1') {
            queue.add(neighborRow to neighborCol)
            visited.add(neighborRow to neighborCol)
          }
        }
      }
    }

    var islands = 0
    for (r in 0 until rows) {
      for (c in 0 until cols) {
        if (visited.contains(r to c)) continue

        if (grid[r][c] == '1') {
          dfs(r, c)
          islands++
        }
      }
    }

    return islands
  }
}
