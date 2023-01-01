/**
 * combinationSum - Decision Tree
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const result = []

  /**
   * @param {number} i
   * @param {number[]} current
   * @param {number} total
   */
  const traverse = (i, current, total) => {
    if (total === target) {
      result.push([...current])
      return
    }

    if (i >= candidates.length || total > target) return

    current.push(candidates[i])
    traverse(i, current, total + candidates[i])

    current.pop()
    traverse(i + 1, current, total)
  }

  traverse(0, [], 0)

  return result
}

console.log(combinationSum([2, 3, 6, 7], 7))
