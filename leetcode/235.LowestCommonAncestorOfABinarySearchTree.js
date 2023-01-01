function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  let current = root

  while (current) {
    if (p.val > current.val && q.val > current.val) {
      current = current.right
    } else if (p.val < current.val && q.val < current.val) {
      current = current.left
    } else {
      return current
    }
  }
}
const tree = new TreeNode(6)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(0)
tree.left.right = new TreeNode(4)
tree.left.right.left = new TreeNode(3)
tree.left.right.right = new TreeNode(5)

tree.right = new TreeNode(8)
tree.right.left = new TreeNode(7)
tree.right.right = new TreeNode(9)

console.log(lowestCommonAncestor(tree, tree.left, tree.right).val)
console.log(lowestCommonAncestor(tree, tree.left, tree.left.right).val)
