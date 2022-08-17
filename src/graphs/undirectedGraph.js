// Undirected Graph
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
}
const graph = new Graph()

graph.addVertex('Tokyo')
graph.addVertex('San Francisco')
graph.addVertex('Los Angels')
graph.addEdge('Tokyo', 'San Francisco')
graph.removeVertex('Tokyo')
console.log(graph.adjacencyList)
