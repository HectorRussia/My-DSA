// original version

class TreeNode {
    public value: number;
    public leftChild: TreeNode | null;
    public rightChild: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinaryTree {
    private root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Insert a new value into the tree
    public insert(value: number): void {
        this.root = this._insert(this.root, value);
    }

    private _insert(node: TreeNode | null, value: number): TreeNode {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.leftChild = this._insert(node.leftChild, value);
        } else {
            node.rightChild = this._insert(node.rightChild, value);
        }
        return node;
    }

    // Find a value in the tree
    public find(value: number): boolean {
        return this._find(this.root, value);
    }

    private _find(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this._find(node.leftChild, value);
        } else if (value > node.value) {
            return this._find(node.rightChild, value);
        } else {
            return true;
        }
    }

    // In-order traversal
    public inOrderTraversal(): void {
        this._inOrderTraversal(this.root);
    }

    private _inOrderTraversal(node: TreeNode | null): void {
        if (node !== null) {
            this._inOrderTraversal(node.leftChild);
            console.log(node.value);
            this._inOrderTraversal(node.rightChild);
        }
    }

    // Pre-order traversal
    public preOrderTraversal(): void {
        this._preOrderTraversal(this.root);
    }

    private _preOrderTraversal(node: TreeNode | null): void {
        if (node !== null) {
            console.log(node.value);
            this._preOrderTraversal(node.leftChild);
            this._preOrderTraversal(node.rightChild);
        }
    }

    // Post-order traversal
    public postOrderTraversal(): void {
        this._postOrderTraversal(this.root);
    }

    private _postOrderTraversal(node: TreeNode | null): void {
        if (node !== null) {
            this._postOrderTraversal(node.leftChild);
            this._postOrderTraversal(node.rightChild);
            console.log(node.value);
        }
    }

    // Height of the tree
    public height(): number {
        return this._height(this.root);
    }

    private _height(node: TreeNode | null): number {
        if (node === null) {
            return -1;  // Base case: if node is null, return -1
        }
        return 1 + Math.max(this._height(node.leftChild), this._height(node.rightChild));
    }

    // Factorial function (for demonstration)
    public factorial(n: number): number {
        if (n === 0) return 1;
        return n * this.factorial(n - 1);
    }
}

// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(3);
tree.insert(7);

console.log("Find 7:", tree.find(7));  // Output: true
console.log("Find 15:", tree.find(15)); // Output: false

console.log('Factorial of 4:', tree.factorial(4)); // Output: 24

console.log("In-order Traversal:");
tree.inOrderTraversal(); 
// Output: 3 5 7 10 20

console.log("Pre-order Traversal:");
tree.preOrderTraversal(); 
// Output: 10 5 3 7 20

console.log("Post-order Traversal:");
tree.postOrderTraversal(); 
// Output: 3 7 5 20 10

console.log('Height of the tree:', tree.height()); 
// Output: 2
