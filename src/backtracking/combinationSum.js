/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {(number[])[]}
 */
function combinationSum(candidates, target) {
  const result = []

  /**
   *
   * @param {number} start
   * @param {number} remaining
   * @param {number[]} current
   */
  const dfs = (start, remaining, current) => {
    if (remaining === 0) {
      result.push([...current])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i]
      if (remaining - num < 0) continue
      current.push(num)
      dfs(i, remaining - num, current)
      current.pop()
    }
  }

  dfs(0, target, [])
  return result
}

console.log(combinationSum([2, 3, 5], 8)) // [ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 5 ] ]

/**
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {(number[])[]}
 */
function combinationSum2(candidates, target) {
  const result = []
  const dfs = (startIndex, path, sum) => {
    if (sum === target) {
      result.push([...path])
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      const candidate = candidates[i]
      if (sum + candidate > target) continue

      path.push(candidate)
      dfs(i, path, sum + candidate)
      path.pop()
    }
  }

  dfs(0, [], 0)

  return result
}

console.log(combinationSum2([2, 3, 6, 7], 7))
