// Recursion - capitalizeFirst
// Write a function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (!arr.length) return []

  return [
    arr[0][0].toLocaleUpperCase() + arr[0].slice(1),
    ...capitalizeFirst(arr.slice(1)),
  ]
}

console.log(capitalizeFirst(['car', 'taco', 'banana']))
