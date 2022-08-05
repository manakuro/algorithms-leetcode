// Selection Sort - O(n^2)
// - Store the first element as the smallest value you've seen so far.
// - Compare this item to the next item in the array until you find a smaller number
// - If a smaller number is found, designate that smaller number to be the new minimum and continue untile the end of the array.
// - If the minimum is not the value you initially began with, swap the two values.
// - Repeat this with the next element until the array is sorted.

const swap = (arr, index1, index2) => {
  ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j
    }
    if (i !== lowest) swap(arr, i, lowest)
  }
  return arr
}

console.log(selectionSort([1, 2, 3, 4, 5, 6, 10, 20, 21, 50, 8, 9, 11]))
