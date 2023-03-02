import { TreeNode } from './shared'

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) return null
  if (!inorder.length) return null

  const root = new TreeNode(preorder[0])
  const midIndex = inorder.findIndex((o) => o === preorder[0])
  root.left = buildTree(
    preorder.slice(1, midIndex + 1),
    inorder.slice(0, midIndex),
  )
  root.right = buildTree(
    preorder.slice(midIndex + 1),
    inorder.slice(midIndex + 1),
  )

  return root
}
const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
