// Binary Search - O(log n)
// Write a function called binarySearch which accepts a sorted array and a value
// and returns the index at which the value exists. Otherwise, return -1

function binarySearch(arr, value) {
  let start = 0
  let end = arr.length - 1

  while (end >= start) {
    const middle = Math.floor((end + start) / 2)
    const element = arr[middle]

    if (element === value) return middle

    if (element > value) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }

  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))
console.log(binarySearch([1, 2, 3, 4, 5], 3))
console.log(binarySearch([1, 2, 3, 4, 5], 5))
console.log(binarySearch([1, 2, 3, 4, 5], 6))
console.log(
  binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 86, 95, 96, 98, 99],
    10,
  ),
)
