/**
 * Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.
 *
 * Examples
 * Example 1:
 * Input: [1,2,1]
 * Output: [2,-1,2]
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
  const result = [...new Array(nums.length)].fill(-1)
  const stack = []
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > stack[stack.length - 1][0]) {
      const [, index] = stack.pop()
      result[index] = nums[i]
    }
    stack.push([nums[i], i])
  }
  for (const num of nums) {
    while (num > stack[stack.length - 1][0]) {
      const [, index] = stack.pop()
      result[index] = num
    }
  }
  return result
}
console.log(nextGreaterElements([1, 2, 1]))
