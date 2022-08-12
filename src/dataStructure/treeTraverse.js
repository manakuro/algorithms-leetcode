class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (newNode.value === current.value) return

      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode
          return this
        }
        current = current.left
      } else if (newNode.value > current.value) {
        if (!current.right) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }
  find(value) {
    if (!this.root) return

    let current = this.root
    let found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    return current
  }
  BFS() {
    const data = []
    const queue = []
    let node = this.root

    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }
  DFSPreOrder() {
    const data = []

    const traverse = (node) => {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return data
  }
  DFSPostOrder() {
    const data = []

    const traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }

    traverse(this.root)

    return data
  }
  DFSInOrder() {
    const data = []

    const traverse = (node) => {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return data
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.BFS())
console.log(tree.DFSInOrder())
