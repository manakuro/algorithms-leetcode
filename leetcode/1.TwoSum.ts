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
