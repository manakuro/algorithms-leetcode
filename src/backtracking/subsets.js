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
console.log(subsets([1, 2, 3])) // [ [ 1, 2, 3 ], [ 1, 2 ], [ 1, 3 ], [ 1 ], [ 2, 3 ], [ 2 ], [ 3 ], [] ]

const subsets2 = (nums) => {
  const result = []

  const dfs = (startIndex, path) => {
    result.push([...path])

    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      dfs(i + 1, path)
      path.pop()
    }
  }

  dfs(0, [])

  return result
}
console.log(subsets2([1, 2, 3]))
