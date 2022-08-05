// Radix Sort
// - Define a function that accepts list of numbers
// - Figure out how many digits the largest number has
// - Loop from k = 0 up to this largest number of digits
// - For each iteration of the loop:
// 	- Create buckets for each digit
// 	- Place each number in the corresponding bucket based on its k th digit
// - Replace our existing array with values in our buckets, starting with 0 and going up to 9.
// - Return list at the end

function radixSort(arr) {
  const maxDigit = mostDigits(arr)
  for (let i = 0; i < maxDigit; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i)
      digitBuckets[digit].push(arr[j])
    }
    arr = [].concat(...digitBuckets)
  }

  return arr
}
console.log(radixSort([2, 24, 13, 24, 1001, 9852]))

function mostDigits(nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]))
  }
  return max
}
console.log(mostDigits([1, 222, 3333, 44444]))

function digitCount(num) {
  if (num === 0) return 1

  // Math.log10: xの10を基数とする対数を計算
  // e.g.)
  //  Math.log10(100)  // 2
  //  Math.log10(1000) // 3
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
console.log(getDigit(12345, 0))
