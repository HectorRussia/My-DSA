// AVLTree
// AVLNode
// insert() - recrusion

// ทำ type ก็ได้นะตรงนี้
class AVLNode {

    public leftChild : AVLNode | null = null;
    public rightChild : AVLNode | null = null;
    public height : number = 0;
    constructor(public value : number) {}
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
    // แนวคิดของ AVL Tree การแทรกโหนดลงในต้นไม้ AVL ต้องเช็คแค่ว่า root 
    // เป็น null หรือไม่ ถ้าเป็น null ก็จะทำการแทรกโหนดใหม่เข้ามาเท่านั้น
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
    //Blance Factor = height(L) - height(R)
    // > 1 => left heavy
    // < -1 => right heavy
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
    private balance(root : AVLNode) : AVLNode {
        if(this.isLeftHeavy(root)) {
           if(root.leftChild && this.balanceFactor(root.leftChild) < 0) {
             //console.log("Left Rotate " + root.leftChild?.value);
             root.leftChild = this.rotateLeft(root.leftChild)
           }
           //console.log("Right Rotate " + root.value);
           return this.rotateRight(root);
        }
        else if(this.isRightHeavy(root)) {
            if(root.rightChild  &&  this.balanceFactor(root.rightChild) > 0) {
                //console.log("Right Rotate " + root.rightChild.value)
                root.rightChild = this.rotateRight(root.rightChild);
            }
            //console.log("Left Rotate " + root.value);
            return this.rotateRight(root);
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
// 10
//  20 (-1)
//   30
// leftRotate(10)

// 10
//  30 (1)  balanceFactor(root.right) > 0
// 20
// rightRotate(30)
// leftRotate(10)

console.log('tree ' , tree);
console.log('tree ' , tree.insert);

//  root
//   20 newroot
// 10  30
// leftRotate(10)

// newRoot = root.right
// root.right = newRoot.left
// newRoot.left = root

// reset height of root / newRoot
