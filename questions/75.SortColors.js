/**
 * sortColors - Bubble Sort
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColorsByBubbleSort = function (nums) {
  const swap = (arr, index1, index2) => {
    ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  }

  let swapped
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

const colors = [2, 0, 2, 1, 1, 0]
sortColorsByBubbleSort(colors)
console.log(colors)

/**
 * sortColors - Insertion Sort
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColorsByInsertionSort = function (nums) {
  const swap = (arr, index1, index2) => {
    ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  }

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]

    let currentIndex = 0
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > current) {
        swap(nums, j + 1, j)
        continue
      }

      currentIndex = j + 1
      break
    }

    nums[currentIndex] = current
  }
}

const colors2 = [2, 0, 2, 1, 1, 0]
sortColorsByInsertionSort(colors2)
console.log(colors2)

/**
 * sortColors - Radix Sort
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColorsByRadixSort = function (nums) {
  /**
   * @param {number[]} n
   * @return {number} max
   */
  const mostDigits = (n) => {
    let max = 0
    for (let i = 0; i < n.length; i++) {
      max = Math.max(max, digitCount(n[i]))
    }

    return max
  }

  /**
   * @param {number} num
   * @return {number}
   */
  const digitCount = (num) => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }

  /**
   * @param {number} num
   * @param {number} i
   * @return {number}
   */
  const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
  }

  /**
   * @param {number[]} n
   * @return {number[]}
   */
  const radixSort = (n) => {
    const maxDigit = mostDigits(n)
    for (let i = 0; i < maxDigit; i++) {
      const digitBuckets = Array.from({ length: 10 }, () => [])
      for (let j = 0; j < n.length; j++) {
        const digit = getDigit(n[j], i)
        digitBuckets[digit].push(n[j])
      }
      n = [].concat(...digitBuckets)
    }
    return n
  }

  const arr = radixSort(nums)

  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i]
  }
}

const colors3 = [2, 0, 2, 1, 1, 0]
sortColorsByRadixSort(colors3)
console.log(colors3)
