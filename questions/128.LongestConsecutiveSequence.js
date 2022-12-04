/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const set = new Set(nums)
  let result = 0
  let length = 0

  for (const num of nums) {
    // e.g. nums = [100,4,200,1,3,2]
    // 100 can be the start of a sequence because 99 does not exist.
    // 200 can be the start of a sequence because 99 does not exist.
    // 1 can be the start of a sequence because 99 does not exist.
    const isStartSequence = !set.has(num - 1)
    if (isStartSequence) {
      // e.g. nums = [100,4,200,1,3,2]
      // 1 -> 2 -> 3 -> 4
      length = 0
      while (set.has(num + length)) {
        length++
      }
      result = Math.max(length, result)
    }
  }

  return result
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
