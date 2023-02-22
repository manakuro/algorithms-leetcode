function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((acc, n) => acc + n, 0)
  if (sum % 2) return false

  let dp = new Set<number>()
  dp.add(0)

  const target = sum / 2

  for (let i = nums.length - 1; i >= 0; i--) {
    const tmp = new Set<number>()
    dp.forEach((t) => {
      tmp.add(t + nums[i])
      tmp.add(t)
    })
    dp = tmp
  }

  return dp.has(target)
}
console.log(canPartition([1, 5, 11, 5]))
