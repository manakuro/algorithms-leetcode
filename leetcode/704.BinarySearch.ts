function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const value = nums[middle]

    if (value === target) return middle
    if (value < target) {
      left = left + 1
    } else {
      right = right - 1
    }
  }

  return -1
}
console.log(search([-1, 0, 3, 5, 9, 12], 9))
