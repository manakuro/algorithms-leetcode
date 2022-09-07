/**
 * search - O(log n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (target === nums[middle]) return middle

    // Left side
    if (nums[left] <= nums[middle]) {
      const lowestLeft = nums[left]

      // e.g.
      //  [4,5,6,7], target = 0, left = 0
      // The target is outside the left side, the left should move to right side.
      if (target > nums[middle] || target < lowestLeft) {
        left = middle + 1

        // e.g.
        //  [4,5,6,7], target = 6, left = 0
        // The target is inside left side, so the right backward to left side.
      } else {
        right = middle - 1
      }

      // Right side
    } else {
      const highestRight = nums[right]

      // e.g.
      //  [9,10,11,0,1,2,3,4,5,6,7,8]
      //  right side = [2,3,4,5,6,7,8], target = 1, right = 11
      // The target is outside the right side, the right should move to left side.
      if (target < nums[middle] || target > highestRight) {
        right = middle - 1

        // e.g.
        //  right side = [10,11,0,1,2], target = 1, right = 10
        // The target is inside right side, so the left forward to right side.
      } else {
        left = middle + 1
      }
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
// console.log(search([4,5,6,7,0,1,2], 6))
// console.log(search([9,10,11,0,1,2,3,4,5,6,7,8], 1))
