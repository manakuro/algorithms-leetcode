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
function lowestCommonAncestorBinaryTree(root, p, q) {
  const dfs = (node) => {
    if (!node) return
    if (node.val === p.val) return node
    if (node.val === q.val) return node

    const left = dfs(node.left)
    const right = dfs(node.right)

    if (left && right) return node

    return left || right
  }

  return dfs(root)
}

const tree = new TreeNode(6)
tree.left = new TreeNode(4)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(5)

tree.right = new TreeNode(6)
tree.right.right = new TreeNode(8)

const res = lowestCommonAncestorBinaryTree(
  tree,
  tree.left.left,
  tree.left.right,
)
console.log(res)
