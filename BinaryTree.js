class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  get isLeaf() {
    return this.left === null && this.right === null
  }
  get hasChildren() {
    return !this.isLeaf
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  //   insert node
  insertNode(value) {
    console.log(value)
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value === value) return undefined
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }
  findNode(value) {
    console.log(value)
    if (!this.root) return false

    let currentNode = this.root
    let found = false

    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        found = currentNode
      }
    }
    if (!found) return undefined
    return found
  }

  inOrderTraversal(rootNode) {
    if (rootNode.left) this.inOrderTraversal(rootNode.left)
    console.log(rootNode.value)
    if (rootNode.right) this.inOrderTraversal(rootNode.right)
  }

  preOrderTraversal(rootNode) {
    console.log(rootNode.value)
    if (rootNode.left) this.inOrderTraversal(rootNode.left)
    if (rootNode.right) this.inOrderTraversal(rootNode.right)
  }

  postOrderTraversal(rootNode) {
    if (rootNode.left) this.inOrderTraversal(rootNode.left)
    if (rootNode.right) this.inOrderTraversal(rootNode.right)
    console.log(rootNode.value)
  }
}

const BST = new BinarySearchTree()

BST.insertNode(11)
BST.insertNode(9)
BST.insertNode(10)
BST.insertNode(15)
BST.insertNode(16)
BST.insertNode(17)
BST.insertNode(18)
BST.insertNode(19)
BST.insertNode(20)
BST.insertNode(21)
BST.insertNode(22)
BST.insertNode(31)
BST.insertNode(33)
BST.insertNode(23)
BST.insertNode(8)
BST.insertNode(6)
BST.insertNode(3)
debugger
console.log('InOrder')
BST.inOrderTraversal(BST.root)
console.log('PostOrder')
BST.postOrderTraversal(BST.root)
console.log('PreOrder')
BST.preOrderTraversal(BST.root)
