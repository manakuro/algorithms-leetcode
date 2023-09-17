class Solution {
  fun search(nums: IntArray, target: Int): Int {
    var left = 0
    var right = nums.size - 1

    while (left <= right) {
      val middle = (left + right) / 2
      if (target == nums[middle]) return middle

      if (nums[left] <= nums[middle]) {
        val lowestLeft = nums[left]

        if (target > nums[middle] || target < lowestLeft) {
          left = middle + 1
        } else {
          right = middle - 1
        }
      } else {
        val highestRight = nums[right]

        if (target < nums[middle] || target > highestRight) {
          right = middle - 1
        } else {
          left = middle + 1
        }
      }
    }

    return -1
  }
}
