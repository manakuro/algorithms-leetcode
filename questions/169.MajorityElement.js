/**
 * majorityElement
 *
 * Time complexity  O(n)
 * Space complexity O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let result = 0
  let count = 0

  for (const num of nums) {
    if (count === 0) {
      result = num
    }
    count = num === result ? count + 1 : count - 1
  }

  return result
}
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

/**
 * majorityElementWithHashMap
 *
 * Time complexity  O(n)
 * Space complexity O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElementWithHashMap = function (nums) {
  const size = nums.length
  const max = Math.floor(size / 2)

  const map = nums.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1
    return acc
  }, {})

  for (const key in map) {
    if (map[key] > max) return key
  }

  return 0
}

console.log(majorityElementWithHashMap([3, 2, 3]))
console.log(majorityElementWithHashMap([2, 2, 1, 1, 1, 2, 2]))
