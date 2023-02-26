import { TreeNode } from './shared'

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = []
  const queue: (TreeNode | null)[] = []

  queue.push(root)

  while (queue.length) {
    const length = queue.length
    let right = null
    for (let i = 0; i < length; i++) {
      const node = queue.shift()

      if (node) {
        right = node
        queue.push(node.left)
        queue.push(node.right)
      }
    }

    if (right) result.push(right.val)
  }

  return result
}
const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.right = new TreeNode(5)
tree.right = new TreeNode(3)
tree.right.right = new TreeNode(4)

console.log(rightSideView(tree))
