class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return

    this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let smallest
    let path = []

    for (const vertex in this.adjacencyList) {
      previous[vertex] = null

      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
        continue
      }
      distances[vertex] = Infinity
      nodes.enqueue(vertex, Infinity)
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor]

          // Calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight
          const nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate
            previous[nextNeighbor] = smallest
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }

    return path.concat(smallest).reverse()
  }
}

const graph = new WeightedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

console.log(graph.dijkstra('A', 'E'))
