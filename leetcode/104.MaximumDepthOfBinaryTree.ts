import { TreeNode } from './shared'

function maxDepth(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    return 1 + Math.max(left, right)
  }

  return dfs(root)
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(maxDepth(tree))
