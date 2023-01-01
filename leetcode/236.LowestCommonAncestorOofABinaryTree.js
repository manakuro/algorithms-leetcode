function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * lowestCommonAncestor
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Find root to P and Q path. The last common node is LCA.
const lowestCommonAncestor = function (root, p, q) {
  const traverse = (node) => {
    if (!node) return null
    if (node.val === p.val) return node
    if (node.val === q.val) return node

    const left = traverse(node.left)
    const right = traverse(node.right)

    if (left && right) return node

    return left || right
  }

  return traverse(root)
}
const tree = new TreeNode(3)
tree.left = new TreeNode(5)
tree.left.left = new TreeNode(6)
tree.left.right = new TreeNode(2)
tree.left.right.left = new TreeNode(7)
tree.left.right.right = new TreeNode(4)

tree.right = new TreeNode(1)
tree.right.left = new TreeNode(0)
tree.right.right = new TreeNode(8)

console.log(lowestCommonAncestor(tree, tree.left, tree.right))
