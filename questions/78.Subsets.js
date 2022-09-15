/**
 * subsets - Backtracking
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const result = []

  let subset = []
  const traverse = (i) => {
    if (i >= nums.length) {
      result.push([...subset])
      return
    }

    subset.push(nums[i])
    traverse(i + 1)

    subset.pop()
    traverse(i + 1)
  }

  traverse(0)

  return result
}
console.log(subsets([1, 2, 3]))
