/**
 * Given an (unweighted) graph, return the length of the shortest path between two nodes A and B, in terms of the number of edges.
 * @param {object} graph
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
function shortestPath(graph, from, to) {
  let level = 0
  const visited = new Set()
  const queue = []
  queue.push(from)

  visited.add(from)

  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (node === to) return level

      const neighbors = graph[node]
      for (const neighbor of neighbors) {
        if (visited[neighbor]) continue
        queue.push(neighbor)
        visited.add(neighbor)
      }
    }
    level++
  }

  return level
}

const res = shortestPath(
  {
    0: [1, 2],
    1: [0, 2, 3],
    2: [0, 1],
    3: [1],
  },
  0,
  3,
)
console.log(res) // 2
