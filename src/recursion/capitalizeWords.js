// Recursion - capitalizeWords
// Write a function called capitalizeWords. Given an array of words,
// return a new array containing each word capitalized.

function capitalizeWords(arr) {
  if (!arr.length) return []

  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))]
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))
