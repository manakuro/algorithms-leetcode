const search = function (nums, target) {
  let start = 0
  let end = nums.length - 1

  while (end >= start) {
    const middleIndex = Math.floor((end + start) / 2)
    const element = nums[middleIndex]

    if (element === target) return middleIndex

    if (target > element) {
      start = middleIndex + 1
    } else {
      end = middleIndex - 1
    }
  }

  return -1
}
console.log(search([-1, 0, 3, 5, 9, 12], 9))
