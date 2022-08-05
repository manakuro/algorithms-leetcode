// Quick Sort
// - Call the pivot helper on the array
// - When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// - Your base case occurs when you consider a subarray with less than 2 elements
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)

    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]))

function swap(arr, index1, index2) {
  ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

function pivot(arr, start = 0, end = arr.length + 1) {
  const value = arr[start]
  let swapIndex = start

  for (let i = start + 1; i < end; i++) {
    if (value > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex)

  return swapIndex
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
