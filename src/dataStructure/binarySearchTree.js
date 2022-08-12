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
}

const tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)
tree.insert(12)
console.log(tree.find(10)?.value)
