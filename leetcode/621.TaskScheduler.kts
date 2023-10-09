class Solution {
  fun leastInterval(tasks: CharArray, n: Int): Int {
    val countOfTask = IntArray(26)

    var max = 0
    val a = 'A'.code

    for (task in tasks) {
      val index = task.code - a
      countOfTask[index]++
      if (countOfTask[index] > max) {
        max = countOfTask[index]
      }
    }

    var taskCount = 0
    for (count in countOfTask) {
      if (count == max) {
        taskCount++
      }
    }

    return maxOf((max - 1) * (n + 1) + taskCount, tasks.size)
  }
}
