/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)

  let right = 0
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    // e.g. [-4,-1,-1,0,1,2]
    //  The second `-1` is skipped.
    if (num === nums[i - 1]) continue
    if (num > 0) break

    left = i + 1
    right = nums.length - 1
    while (left < right) {
      const sum = num + nums[left] + nums[right]
      if (sum > 0) {
        right--
        continue
      }
      if (sum < 0) {
        left++
        continue
      }

      result.push([num, nums[left], nums[right]])

      // e.g. [-2,-2,0,0,2,2]
      // If the previous left pointer is same as the current left pointer
      // then, move forward left pointer.
      left++
      while (nums[left] === nums[left - 1] && left < right) {
        left++
      }
    }
  }

  return result
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
