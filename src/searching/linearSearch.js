// Linear Search - O(n)
// Write a function called linearSearch which accepts an array and a value,
// and returns the index at which the value exists. If the value does not
// exist in the array, return -1;

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element === value) return i
  }
  return -1
}
console.log(linearSearch([10, 15, 20, 25, 30], 15))
