function permute(nums: number[]): number[][] {
  const result: number[][] = []

  const dfs = (
    startIndex: number,
    current: number[],
    visited: Record<number, boolean>,
  ) => {
    if (startIndex === nums.length) {
      result.push([...current])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue

      current.push(nums[i])
      visited[i] = true
      dfs(startIndex + 1, current, visited)
      current.pop()
      visited[i] = false
    }
  }

  dfs(0, [], {})

  return result
}
console.log(permute([1, 2, 3])) // [1,1,1], [1,1,2] [1,1,3] ...
