function partition(s) {
  const result = []
  const max = s.length

  const dfs = (start, current) => {
    if (start === max) {
      result.push([...current])
      return
    }

    for (let i = start + 1; i < max + 1; i++) {
      const prefix = s.slice(start, i)
      if (isPalindrome(prefix)) {
        current.push(prefix)
        dfs(i, current)
        current.pop()
      }
    }
  }

  dfs(0, [])

  return result
}
console.log(partition('aab')) // [ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]

function isPalindrome(word) {
  let start = 0
  let end = word.length - 1
  while (start <= end) {
    if (word[start] !== word[end]) return false
    start++
    end--
  }

  return true
}
