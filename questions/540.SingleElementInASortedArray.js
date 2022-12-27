/**
 *
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
  const inLeft = (index) => {
    if (index === nums.length - 1) return true
    if (index % 2) return nums[index] !== nums[index - 1]

    return nums[index] !== nums[index + 1]
  }

  let start = 0
  let end = nums.length - 1
  let result = -1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    if (inLeft(middle)) {
      result = middle
      end = middle - 1
    } else {
      start = middle + 1
    }
  }

  return nums[result]
}

// 2
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
