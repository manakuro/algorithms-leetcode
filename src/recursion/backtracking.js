/**
 * Backtracking approach
 *
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * @param nums {number[]}
 * @return {number[][]}
 */
const permute = (nums) => {
  const result = []
  const max = nums.length

  /**
   * @param i {number}
   * @param current {number[]}
   */
  const traverse = (i, current) => {
    if (current.length === max) {
      result.push([...current])
      return
    }

    if (i >= max) return

    current.push(nums[i])
    traverse(i, current)

    current.pop()
    traverse(i + 1, current)
  }

  traverse(0, [])

  return result
}

console.log(permute([1, 2, 3]))
