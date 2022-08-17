class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return

    this.adjacencyList[vertex] = []
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(vertex, v)
    })
    delete this.adjacencyList[vertex]
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    )
  }
  breadthFirst(start) {
    const result = []
    const visited = {}
    let queue = [start]

    visited[start] = true
    while (queue.length) {
      const vertex = queue.shift()
      result.push(vertex)

      this.adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true
          queue.push(v)
        }
      })
    }

    return result
  }
}
const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph.breadthFirst('A'))
