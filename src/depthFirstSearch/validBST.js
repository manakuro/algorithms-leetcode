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
 * @return {boolean}
 */
function validBST(root) {
  /**
   *
   * @param {TreeNode} node
   * @param {number} left
   * @param {number} right
   * @return {boolean}
   */
  const dfs = (node, left, right) => {
    if (!node) return true
    if (!(node.val > left && node.val < right)) return false

    return (
      // e.g. root = 5
      // -∞ < 3 < 5
      dfs(node.left, left, node.val) &&
      // 5 < 8 < ∞
      dfs(node.right, node.val, right)
    )
  }

  return dfs(root, -Infinity, Infinity)
}

const tree = new TreeNode(6)
tree.left = new TreeNode(4)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(5)

tree.right = new TreeNode(8)

const res = validBST(tree)
console.log(res)
