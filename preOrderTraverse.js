#insert
const node = [7,1,9,3,2,6,4,5]

//节点类
class Node {
    constructor(key) {
        this.left = null
        this.right = null
        this.key = key
    }
}

//二叉树类
class BinaryTree {
    constructor() {
        this.root = null
        this.result = []
    }
    insert (key) {
        const newNode = new Node(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.inOrderTraversNode(this.root, newNode)
        }
    }
    inOrderTraversNode (node, newNode) {
        if (newNode.key < node.key) { // 左插
            if (node.left === null) {
                node.left = newNode
            }else{
                this.inOrderTraversNode(node.left, newNode)
            }    
        } else { // 右插
            if (node.right === null) {
                node.right = newNode
            } else {
                this.inOrderTraversNode(node.right, newNode)
            }
        }
    }
    preOrderTraverse(root) {
        if (!root) {
            return []
        }
        this.result.push(root.key)
        var left = root.left;
        var right = root.right;
        left && this.preOrderTraverse(left)
        right && this.preOrderTraverse(right)
        return this.result;
    }
}

const binaryTree = new BinaryTree()
node.map(function(item) {
    binaryTree.insert(item)
})

root = binaryTree.root

console.log(binaryTree.preOrderTraverse(root))
