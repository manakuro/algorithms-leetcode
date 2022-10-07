class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * Given a binary tree, return the rightmost node of each level.
 *
 * @param {TreeNode} root
 *
 * @return {number[]}
 */
function binaryTreeRightSideView(root) {
  const queue = []
  const result = []

  queue.push(root)
  while (queue.length) {
    const length = queue.length
    result.push(queue[0].val)
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (node) {
        if (node.right) queue.push(node.right)
        if (node.left) queue.push(node.left)
      }
    }
  }
  return result
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.left.left.right = new TreeNode(7)

tree.right = new TreeNode(3)
tree.right.right = new TreeNode(6)

const res = binaryTreeRightSideView(tree)
console.log(res) // [ 1, 3, 6, 7 ]
