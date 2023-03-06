import { TreeNode } from './shared'

function kthSmallest(root: TreeNode | null, k: number): number {
  const values: number[] = []
  const dfs = (node: TreeNode | null) => {
    if (!node) return

    if (node) {
      dfs(node.left)
      values.push(node.val)
      dfs(node.right)
    }
  }

  dfs(root)

  return values[k - 1]
}
const tree = new TreeNode(3)
tree.left = new TreeNode(1)
tree.left.right = new TreeNode(2)
tree.right = new TreeNode(4)

console.log(kthSmallest(tree, 1))
