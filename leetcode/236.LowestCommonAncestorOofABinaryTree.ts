import { TreeNode } from './shared'

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  const dfs = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null
    if (node.val === p?.val) return node
    if (node.val === q?.val) return node

    const left = dfs(node.left)
    const right = dfs(node.right)

    if (left && right) return node

    return left || right
  }

  return dfs(root)
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
