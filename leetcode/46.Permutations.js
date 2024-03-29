/**
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

console.log(permute([1, 2, 3]))
