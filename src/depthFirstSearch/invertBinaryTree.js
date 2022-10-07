class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * Given a binary tree, determine whether it is a binary search tree.
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertBinaryTree(root) {
  if (!root) {
    return null
  }

  const tmp = root.left
  root.left = root.right
  root.right = tmp

  invertBinaryTree(root.left)
  invertBinaryTree(root.right)

  return root
}

const tree = new TreeNode(6)
tree.left = new TreeNode(4)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(5)

tree.right = new TreeNode(6)
tree.right.right = new TreeNode(8)

const res = invertBinaryTree(tree)
console.log(res)
