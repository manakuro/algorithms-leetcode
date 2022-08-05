// Merge sort - O(n log n)
// - Break up the array into halves until you have arrays that are empty or have one element
// - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// - Once the array has been merged back together, return the merged array

function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}
console.log(mergeSort([10, 24, 76, 73]))

// - Create an empty array, take a look at the smallest values in each input array
// - While there are still values we haven't looked at
// 	- If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// 	- If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// 	- Once we exhaust one array, push in all remaining values from the other array
function merge(arr1, arr2) {
  const result = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  // Push the rest items in the array after comparing the two.
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}
console.log(merge([3, 4, 5, 6, 7, 100], [2, 14, 99, 1001]))
