// Recursive - flatten
// Write a function called flatten which accepts an array of arrays and
// returns a new array with all values flattened.
function flatten(arr) {
  if (!arr.length) return []

  return [
    ...[].concat(Array.isArray(arr[0]) ? flatten(arr[0]) : arr[0]),
    ...flatten(arr.slice(1)),
  ]
}
console.log(flatten([1, 2, 3, [4, 5, [6, 7, [8, 9]]]]))
