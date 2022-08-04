// Naive String Search

function naiveSearch(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}

console.log(naiveSearch('lorie loled, lollollol', 'lol'))

function naiveSearch2(long, short) {
  let count = 0
  let shortLength = short.length
  const formedLong = long.replace(/\s/g, '')

  for (let i = 0; i < formedLong.length; i++) {
    const partial = formedLong.slice(i, i + shortLength)
    if (partial === short) count++
  }
  return count
}

console.log(naiveSearch2('lorie loled, lollollol', 'lol'))
