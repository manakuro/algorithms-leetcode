class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * In a binary tree, we define a node "visible" when no node on the root-to-itself path (inclusive) has a greater value.
 * The root is always "visible" since there are no other nodes between the root and itself.
 *
 * Given a binary tree, count the number of "visible" nodes.
 *
 * @param {TreeNode} root
 * @return {number}
 */
function visibleTreeNode(root) {
  /**
   *
   * @param {TreeNode} node
   * @param {number} max
   * @return {number}
   */
  const dfs = (node, max) => {
    if (!node) return 0

    let total = 0

    if (node.val >= max) total++
    total += dfs(node.left, Math.max(max, node.val))
    total += dfs(node.right, Math.max(max, node.val))

    return total
  }

  return dfs(root, -Infinity)
}

const tree = new TreeNode(5)
tree.left = new TreeNode(4)
tree.right = new TreeNode(6)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(8)

const res = visibleTreeNode(tree)
console.log(res)
