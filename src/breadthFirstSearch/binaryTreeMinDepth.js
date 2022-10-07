class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * Given a binary tree, find the depth of the shallowest leaf node.
 *
 * @param {TreeNode} root
 *
 * @return {number}
 */
function binaryTreeMinDepth(root) {
  const queue = []
  let depth = -1

  queue.push(root)
  while (queue.length) {
    depth++
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (node) {
        if (!node.left && !node.right) {
          return depth
        }

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
  }

  return depth
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.left.right.right = new TreeNode(8)
tree.left.left.right = new TreeNode(7)

tree.right = new TreeNode(3)
tree.right.right = new TreeNode(6)

const res = binaryTreeMinDepth(tree)
console.log(res) // 2
