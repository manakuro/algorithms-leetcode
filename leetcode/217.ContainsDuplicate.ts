function containsDuplicate(nums: number[]): boolean {
  const maps: Record<number, boolean> = {}
  for (const num of nums) {
    if (maps[num]) return true

    maps[num] = true
  }

  return false
}
console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
