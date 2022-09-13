/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  // Calculate sum of the array. If sum is odd, there can not be two subsets with equal sum, so return false.
  const sum = nums.reduce((acc, n) => acc + n, 0)
  if (sum % 2) return false

  let dp = new Set()
  dp.add(0)

  const target = sum / 2

  // If sum of array elements is even, store the sum of all elements using Dynamic Programming.
  for (let i = nums.length - 1; i >= 0; i--) {
    const tmp = new Set()
    dp.forEach((t) => {
      tmp.add(t + nums[i])
      tmp.add(t)
    })
    dp = tmp
  }

  return dp.has(target)
}

console.log(canPartition([1, 5, 11, 5]))
// console.log(canPartition([1,2,3,5]))
