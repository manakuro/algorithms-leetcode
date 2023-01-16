import { TreeNode } from './shared'

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function isBalanced(root: TreeNode | null): boolean {
  const dfs = (
    node: TreeNode | null,
  ): { isBalanced: boolean; height: number } => {
    if (!node) {
      return {
        isBalanced: true,
        height: 0,
      }
    }

    const left = dfs(node.left)
    const right = dfs(node.right)
    const isBalanced =
      left?.isBalanced &&
      right?.isBalanced &&
      Math.abs(left.height - right.height) <= 1

    return {
      isBalanced,
      height: 1 + Math.max(left.height, right.height),
    }
  }

  return dfs(root).isBalanced
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(isBalanced(tree))
