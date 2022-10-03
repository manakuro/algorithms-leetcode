/**
 * Backtracking approach
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  let result = []

  if (nums.length === 1) return [[...nums]]

  for (let i = 0; i < nums.length; i++) {
    const num = nums.shift()

    const perms = permute(nums)

    // e.g. num = 1
    // perms = [3, 2], [2, 3]
    // perms.push(1)
    for (const perm of perms) {
      perm.push(num)
    }

    result = result.concat(perms)
    nums.push(num)
  }

  return result
}

console.log(permute([1, 2, 3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * Backtracking approach
 *
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * @param nums {number[]}
 * @return {number[][]}
 */
const permuteAll = (nums) => {
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

console.log(permuteAll([1, 2, 3])) // [1,1,1], [1,1,2] [1,1,3] ...

/**
 *
 * @param {string} letters
 * @return {string[]}
 */
function permutations(letters) {
  const result = []

  /**
   *
   * @param {number} startIndex
   * @param {string[]} current
   * @param {{ [k: number]: boolean }} visited
   */
  const dfs = (startIndex, current, visited) => {
    if (startIndex === letters.length) {
      result.push(current.join(''))
      return
    }

    for (let i = 0; i < letters.length; i++) {
      if (visited[i]) continue

      current.push(letters[i])
      visited[i] = true
      dfs(startIndex + 1, current, visited)
      current.pop()
      visited[i] = false
    }
  }

  dfs(0, [], {})

  return result
}
console.log(permutations('abc')) // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
