/**
 * topKFrequent - Bucket Sort
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const countMap = nums.reduce((acc, num) => {
    acc[num] = (acc[num] ?? 0) + 1
    return acc
  }, {})

  const frequency = [...new Array(nums.length + 1)].map(() => [])

  // e.g. [1,1,1,2,2,3]
  // = [[], [3], [2], [1], [], [], []]
  for (const countMapKey in countMap) {
    frequency[countMap[countMapKey]].push(countMapKey)
  }

  const result = []
  for (let i = frequency.length - 1; i >= 0; i--) {
    for (const f of frequency[i]) {
      result.push(f)
      if (result.length === k) {
        return result
      }
    }
  }

  return result
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
