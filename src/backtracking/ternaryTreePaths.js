class TreeNode {
  /**
   *
   * @param {number} val
   * @param {TreeNode[]} children
   */
  constructor(val, children = []) {
    this.val = val
    this.children = children
  }
}

/**
 * Given a ternary tree (each node of the tree has at most three children), find all root-to-leaf paths.
 * @param {TreeNode} root
 */
function ternaryTreePaths1(root) {
  const result = []

  /**
   *
   * @param {TreeNode} node
   * @param {number[]} path
   */
  const dfs = (node, path) => {
    if (node.children.length === 0) {
      path.push(node.val)
      result.push(path.join('->'))
      return
    }

    for (const child of node.children) {
      if (child) {
        const currentPath = [...path]
        currentPath.push(node.val)
        dfs(child, currentPath)
      }
    }
  }

  dfs(root, [])

  return result
}

const tree = new TreeNode(1)
tree.children = [new TreeNode(2), new TreeNode(4), new TreeNode(6)]
tree.children[0].children = [new TreeNode(3)]

// [ '1->2->3', '1->4', '1->6' ]
console.log(ternaryTreePaths1(tree))

/**
 * Given a ternary tree (each node of the tree has at most three children), find all root-to-leaf paths.
 * @param {TreeNode} root
 */
function ternaryTreePaths2(root) {
  const result = []

  /**
   *
   * @param {TreeNode} node
   * @param {number[]} path
   */
  const dfs = (node, path) => {
    if (node.children.length === 0) {
      path.push(node.val)
      result.push(path.join('->'))
      path.pop()
      return
    }

    for (const child of node.children) {
      if (child) {
        path.push(node.val)
        dfs(child, path)
        path.pop()
      }
    }
  }

  dfs(root, [])

  return result
}

const tree2 = new TreeNode(1)
tree2.children = [new TreeNode(2), new TreeNode(4), new TreeNode(6)]
tree2.children[0].children = [new TreeNode(3)]

// [ '1->2->3', '1->4', '1->6' ]
console.log(ternaryTreePaths2(tree2))
