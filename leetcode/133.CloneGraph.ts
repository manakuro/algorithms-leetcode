import { GraphNode as Node } from './shared'

function cloneGraph(node: Node | null): Node | null {
  if (!node) return null

  const map = new Map()

  const dfs = (node: Node | null) => {
    if (map.has(node)) return map.get(node)

    const copy = new Node(node?.val)
    map.set(node, copy)

    for (const neighbor of node?.neighbors || []) {
      copy.neighbors.push(dfs(neighbor))
    }

    return copy
  }

  return dfs(node)
}
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)

node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node1, node3]

console.log(cloneGraph(node1))
