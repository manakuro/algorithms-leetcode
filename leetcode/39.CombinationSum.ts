function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  const traverse = (i: number, current: number[], total: number) => {
    if (total === target) {
      result.push([...current])
      return
    }

    if (i >= candidates.length) return
    if (total > target) return

    current.push(candidates[i])
    traverse(i, current, total + candidates[i])

    current.pop()
    traverse(i + 1, current, total)
  }

  traverse(0, [], 0)

  return result
}

console.log(combinationSum([2, 3, 6, 7], 7))
