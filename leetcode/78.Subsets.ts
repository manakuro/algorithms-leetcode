function subsets(nums: number[]): number[][] {
  const result: number[][] = []
  const dfs = (startIndex: number, path: number[]) => {
    if (startIndex >= nums.length) {
      result.push([...path])
      return
    }

    path.push(nums[startIndex])
    dfs(startIndex + 1, path)

    path.pop()
    dfs(startIndex + 1, path)
  }

  dfs(0, [])

  return result
}
console.log(subsets([1, 2, 3])) // [ [ 1, 2, 3 ], [ 1, 2 ], [ 1, 3 ], [ 1 ], [ 2, 3 ], [ 2 ], [ 3 ], [] ]
