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
 * @return {number}
 */
function treeMaxDepth(root) {
  if (!root) return 0

  const left = treeMaxDepth(root.left)
  const right = treeMaxDepth(root.right)

  return 1 + Math.max(left, right)
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

const res = treeMaxDepth(tree)
console.log(res) // 3
