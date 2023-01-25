function majorityElement(nums: number[]): number {
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
