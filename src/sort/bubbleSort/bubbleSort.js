// Bubble Sort - O(n^2) or O(n) if best cases
// - Start looping from with a variable called i  the end of the array towards the beginning
// - Start an inner loop with a variable called j from the beginning until i - 1
// - If arr[j] is greater than arr[j+1], swap those two values
// - Return the sorted array

const swap = (arr, index1, index2) => {
  ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

function bubbleSort(arr) {
  let swapped
  for (let i = arr.length; i > 0; i--) {
    swapped = false

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true
      }
    }
    // It is not going to make any swaps if it doesn't make any swaps.
    if (!swapped) break
  }

  return arr
}
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 10, 8, 9, 11]))
