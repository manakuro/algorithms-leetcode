/**
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  let min = 0
  const last = nums[nums.length - 1]

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const middleValue = nums[middle]

    if (middleValue <= last) {
      right = middle - 1
      min = middle
    } else {
      left = middle + 1
    }
  }

  return nums[min]
}

console.log(findMin([11, 13, 15, 17]))
