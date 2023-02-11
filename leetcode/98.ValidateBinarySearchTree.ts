import { TreeNode } from './shared'

function isValidBST(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, left: number, right: number): boolean => {
    if (!node) return true
    if (!(left < node.val && right > node.val)) return false

    return dfs(node.left, left, node.val) && dfs(node.right, node.val, right)
  }

  return dfs(root, -Infinity, Infinity)
}
const tree = new TreeNode(2)
tree.left = new TreeNode(1)
tree.right = new TreeNode(3)

console.log(isValidBST(tree))
