function twoSum(nums: number[], target: number): number[] {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const diff = target - n
    if (map.has(diff)) return [map.get(diff), i]

    map.set(n, i)
  }

  return []
}
console.log(twoSum([2, 7, 11, 15], 9))

function twoSum2(arr: number[], target: number): number[] {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) {
      return [left, right]
    }

    if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

console.log(twoSum2([2, 7, 11, 15], 9))
