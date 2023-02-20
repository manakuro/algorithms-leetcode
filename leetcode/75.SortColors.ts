import { swap } from 'src/util'

function sortColors(nums: number[]): void {
  let swapped = false
  for (let i = nums.length; i > 0; i--) {
    swapped = false
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
        swapped = true
      }
    }
    if (!swapped) break
  }
}

const arr = [0, 1, 2, 5, 6, 10]
sortColors(arr)
console.log(arr)
