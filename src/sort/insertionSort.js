// Insertion Sort - O(n^2) or O(1)
// - Start by picking the second element in the array
// - Now compare the second element with the one before it and swap if necessary
// - Continue to the next element and if it is int the incorrect order, iterate through the sorted portion to place the element in the correct place.
// - Repeat until the array is sorted.

const swap = (arr, index1, index2) => {
  ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]

    let currentIndex = 0
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > current) {
        swap(arr, j + 1, j)
        continue
      }

      currentIndex = j + 1
      break
    }
    arr[currentIndex] = current
  }

  return arr
}

console.log(insertionSort([2, 1, 9, 76, 4, 20, 34, 40, 50, 60]))
