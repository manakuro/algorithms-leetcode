function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val
  this.neighbors = neighbors === undefined ? [] : neighbors
}

/**
 * cloneGraph - DFS
 *
 * Time complexity - O(n)
 *
 * @param {Node} node
 * @return {Node}
 */
// 1. Create a hash map.
//  - Mapping old node to new node.
// 2. Create a clone node.
// 3. Connect to neighbors through the hash map.
// 4. Do the `2.` and `3.` recursively.
const cloneGraph = function (node) {
  if (!node) return null

  const map = new Map()

  /**
   * @param {Node} node
   * @return {Node}
   */
  const traverse = (node) => {
    if (map.has(node)) return map.get(node)

    const copy = new Node(node.val)
    map.set(node, copy)

    for (const neighbor of node.neighbors) {
      copy.neighbors.push(traverse(neighbor))
    }

    return copy
  }

  return traverse(node)
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
