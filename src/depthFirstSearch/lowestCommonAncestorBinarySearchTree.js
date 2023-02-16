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
 * @param {TreeNode} p
 * @param {TreeNode} q
 *
 * @return {TreeNode}
 */
function lowestCommonAncestorBinarySearchTree(root, p, q) {
  let current = root
  while (current) {
    // current.val = 6
    // p = 0, q = 4
    //       6
    //      / \
    //     2   8
    //    / \   \
    //   0   4   9
    //
    // 6 > 0 && 6 > 4 then search left tree
    if (current.val > p.val && current.val > q.val) {
      current = current.left
    } else if (current.val < p.val && current.val < q.val) {
      current = current.right
    } else {
      return current
    }
  }

  return root
}

const tree = new TreeNode(6)
tree.left = new TreeNode(4)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(5)

tree.right = new TreeNode(6)
tree.right.right = new TreeNode(8)

const res = lowestCommonAncestorBinarySearchTree(
  tree,
  tree.left.left,
  tree.left.right,
)
console.log(res)
