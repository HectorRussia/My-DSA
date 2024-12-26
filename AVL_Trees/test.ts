// AVLTree
// AVLNode
// insert() - recrusion

// ทำ type ก็ได้นะตรงนี้
class AVLNode {

    public leftChild : AVLNode | null = null;
    public rightChild : AVLNode | null = null;
    public height : number = 0;
    constructor(public value : number) {}
    toString(): string {
        return `(${this.value}, h=${this.height})`;
    }
}
class AVLTree {

    private root : AVLNode | null = null;
   
    public toString(): string {
        return this._toString(this.root);
    }
    private _toString(node: AVLNode | null): string {
        if (node === null) {
            return '';
        }
        return `${this._toString(node.leftChild)} ${node.toString()} ${this._toString(node.rightChild)}`;
    }

    public insert(value : number) : void {
        this.root = this._insert(this.root,value);
    }

    // insert
    public _insert(root : AVLNode | null , value : number ) : AVLNode {
        if(root == null) {
            return new AVLNode(value);
        }
        // น้อยไปซ้าย มากไปขวา
        if(value < root.value) {
            root.leftChild =  this._insert(root.leftChild ,value);
        }
        else {
            root.rightChild =this._insert(root.rightChild ,value)
        }

        // Height
        this.setHeight(root);
        
        root = this.balance(root);
        return root;
    }

    // Height
    private height(node : AVLNode | null) : number{
        return (node == null) ? -1 : node.height;
    }

    // Blance Factor
    private isLeftHeavy(node : AVLNode) : boolean {
        return this.balanceFactor(node)> 1;
    }
    private isRightHeavy(node : AVLNode) : boolean {
        return this.balanceFactor(node) < -1;
    }
    private balanceFactor(node: AVLNode | null) : number {
        return (node == null) ? 0 : this.height(node.leftChild) - this.height(node.rightChild)
    }

    // Detecting Rotations
    private balance(root: AVLNode): AVLNode {
        console.log("Balancing node:", root.value);
        console.log("Left child:", root.leftChild ? root.leftChild.value : null);
        console.log("Right child:", root.rightChild ? root.rightChild.value : null);
    
        if (this.isLeftHeavy(root)) {
            console.log("Node is left heavy");
            if (root.leftChild && this.balanceFactor(root.leftChild) < 0) {
                console.log("Performing left rotation on left child:", root.leftChild.value);
                root.leftChild = this.rotateLeft(root.leftChild);
            }
            if (root.leftChild) {
                console.log("Performing right rotation on root:", root.value);
                return this.rotateRight(root);
            }
        } else if (this.isRightHeavy(root)) {
            console.log("Node is right heavy");
            if (root.rightChild && this.balanceFactor(root.rightChild) > 0) {
                console.log("Performing right rotation on right child:", root.rightChild.value);
                root.rightChild = this.rotateRight(root.rightChild);
            }
            if (root.rightChild) {
                console.log("Performing left rotation on root:", root.value);
                return this.rotateLeft(root);
            }
        }
        return root;
    }
    

    // Implementing Rotations
    private rotateLeft(root: AVLNode ): AVLNode {
        if (!root.rightChild) throw new Error("rotateLeft called on a node without a right child");
    
        let newRoot = root.rightChild;
        root.rightChild = newRoot.leftChild;
        newRoot.leftChild = root;
    
        this.setHeight(root);
        this.setHeight(newRoot);
    
        return newRoot;
    }
    
    private rotateRight(root: AVLNode): AVLNode {
        if (!root.leftChild) throw new Error("rotateRight called on a node without a left child");
    
        let newRoot = root.leftChild;
        root.leftChild = newRoot.rightChild;
        newRoot.rightChild = root;
    
        this.setHeight(root);
        this.setHeight(newRoot);
    
        return newRoot;
    }
 
    private setHeight(node :AVLNode) {
        node.height = Math.max(
            this.height(node.leftChild),
            this.height(node.rightChild)
        ) + 1;
    }
}

let tree = new AVLTree()
tree.insert(10);
tree.insert(20);
tree.insert(30);
console.log('tree ' , tree.toString());

console.log('Tree object:', tree);