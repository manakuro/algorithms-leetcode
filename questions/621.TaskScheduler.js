/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const countOfTask = new Array(26).fill(0)

  let max = 0
  const A = 'A'.charCodeAt(0)

  for (const task of tasks) {
    const index = task.charCodeAt(0) - A
    countOfTask[index]++
    if (countOfTask[index] > max) {
      max = countOfTask[index]
    }
  }

  let taskCount = 0
  for (const count of countOfTask) {
    if (count === max) {
      taskCount++
    }
  }

  return Math.max((max - 1) * (n + 1) + taskCount, tasks.length)
}

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))
