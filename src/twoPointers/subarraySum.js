/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
function subarraySum(arr, target) {
  const prefixSums = new Map()
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    const diff = sum - target
    if (prefixSums.has(diff)) {
      return [prefixSums.get(diff), i + 1]
    }

    prefixSums.set(sum, i + 1)
  }
}
console.log(subarraySum([1, -20, -3, 30, 5, 4], 7))
