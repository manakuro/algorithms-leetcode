/**
 * @param {number[]} nums
 * @return {number[]}
 */
// nums:    [1,2,3,4]
// prefix:  [1,2,6,24]
// postfix: [24,24,12,4]
// output:  [
//  24, -> prefix(1) * postfix(24)
//  12, -> prefix(1) * postfix(12)
//  8,  -> prefix(2) * postfix(4)
//  6,  -> prefix(6) * postfix(1)
// ]
const productExceptSelf = function (nums) {
  const result = [...new Array(nums.length)].fill(1)

  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix
    prefix *= nums[i]
  }

  let postfix = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix
    postfix *= nums[i]
  }

  return result
}

console.log(productExceptSelf([1, 2, 3, 4]))
