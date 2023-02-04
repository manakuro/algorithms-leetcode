function threeSum(nums: number[]): number[][] {
  const result = []
  nums.sort((a, b) => a - b)

  let right = 0
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

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

      left++
      while (nums[left] === nums[left - 1] && left < right) {
        left++
      }
    }
  }

  return result
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
