class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 *
 * @param {TreeNode} root
 *
 * @return {number[][]}
 */
function levelOrderTraversal(root) {
  const result = []
  const queue = []

  queue.push(root)

  while (queue.length) {
    const length = queue.length
    const data = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (node) {
        data.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    if (data.length) result.push(data)
  }

  return result
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)

tree.right = new TreeNode(3)
tree.right.right = new TreeNode(8)

const res = levelOrderTraversal(tree)
console.log(res) // [ [ 1 ], [ 2, 3 ], [ 4, 5, 8 ] ]
