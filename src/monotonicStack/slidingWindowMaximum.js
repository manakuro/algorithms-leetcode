/**
 * We have an array and a sliding window defined by a start index and an end index. The sliding window moves from left of the array to right. There are always k elements in the window. The window moves one position at a time. Find the maximum integer within the window each time it moves.
 *
 * @example
 * Input:
 *
 * arr = [1, 3, 2, 5, 8, 7]
 * k = 3
 * Output:
 *
 * [3, 5, 8, 8]
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function slidingWindowMaximum(nums, k) {
  const queue = []
  const result = []
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop()
    }
    queue.push(i)

    if (queue[0] === i - k) {
      queue.shift()
    }
    if (i >= k - 1) {
      result.push(nums[queue[0]])
    }
  }

  return result
}
// [3,5,8,8]
console.log(slidingWindowMaximum([1, 3, 2, 5, 8, 7], 3))
