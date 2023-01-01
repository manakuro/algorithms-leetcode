function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * rightSideView - BFS
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
  const result = []
  const queue = []

  queue.push(root)

  while (queue.length) {
    let right = null
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (node) {
        right = node
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    if (right) result.push(right.val)
  }

  return result
}
const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.right = new TreeNode(5)
tree.right = new TreeNode(3)
tree.right.right = new TreeNode(4)

console.log(rightSideView(tree))
