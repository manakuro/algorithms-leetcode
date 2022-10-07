class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * Given a binary tree, write a serialize function that converts the tree into a string and a deserialize function that converts a string to a binary tree.
 *
 * You may serialize the tree into any string representation you want as long as it can be deseralized.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  const result = []

  const dfs = (node) => {
    if (!node) {
      result.push('null')
      return
    }

    result.push(String(node.val))
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return result.join(',')
}

/**
 *
 * @param {string} s
 * @return {TreeNode|null}
 */
function deserialize(s) {
  const values = s.split(',')

  let i = 0

  /**
   *
   * @return {TreeNode|null}
   */
  const dfs = () => {
    if (values[i] === 'null') {
      i++
      return null
    }

    const node = new TreeNode(values[i])

    i++
    node.left = dfs()
    node.right = dfs()

    return node
  }

  return dfs()
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.left.left.right = new TreeNode(7)

tree.right = new TreeNode(3)
tree.right.right = new TreeNode(6)

const res = serialize(tree)
console.log(res)

const deserialized = deserialize(res)
console.log(deserialized.val)
