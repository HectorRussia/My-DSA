// Building a Tree 
// Tree(root)
// Node(Value,leftchild,rightchild) Node(Value,next,previos) 
// insert(value)
// find(value):boolean

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
  
type rootProp =  TreeNode | null;
type nodeProp = TreeNode | null;
class BinaryTree {

    private root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    public insert(value : number) {
        const newNode = new TreeNode(value);

        if(this.root === null) {
            this.root = newNode;
        }
        else {
            let current = this.root;
            while (true) {
                if(value < current.value) {
                    if(current.leftChild === null) {
                        current.leftChild = newNode;
                        break;
                    }
                    current = current.leftChild;
                }
                else {
                    if(value > current.value) {
                        if(current.rightChild === null) {
                            current.rightChild = newNode;
                            break;
                        }
                        current = current.rightChild;
                    }
                }
            }
        }
    }

    public find(value : number) : boolean {
        let current = this.root;
        while(current != null) {
            if( value < current.value) {
                current = current.leftChild;
            }
            else if(value > current.value) {
                current = current.rightChild;
            }
            else {
                return true // found
            }
        }
        return false // not found
    }

    
    public factorial(n : number) : number {

        // แบบ Iterative (loop) 
        // let factorial = 1;
        // for (let i = 1; i <= n; i++) {
        //     factorial *= i;
        // }
        // return factorial


        // base case แบบ recursion
        if (n == 0) { 
            return 1;
        }
        return n * this.factorial(n-1);
        // ควรเลือกแบบไหน?
        // Recursion: โค้ดดูเรียบง่ายและสะท้อนโครงสร้างทางคณิตศาสตร์ของ factorial
        // Iterative: ประหยัดหน่วยความจำกว่า เพราะไม่มีการสร้าง stack frame สำหรับการเรียกซ้ำ
        // ถ้าต้องการประสิทธิภาพในกรณีของเลข n ใหญ่ ๆ อาจเหมาะที่จะใช้แบบ iterative มากกว่า 
    }

    public postOrderTraversal(node: TreeNode | null = this.root): void {
        if (node !== null) {
          this.postOrderTraversal(node.leftChild);
          console.log(node.value);
          this.postOrderTraversal(node.rightChild);
        }
    }

    public inOrderTraversal(node: TreeNode | null = this.root): void {
        if (node !== null) {
          this.inOrderTraversal(node.leftChild);
          console.log(node.value);
          this.inOrderTraversal(node.rightChild);
        }
    }

    public preOrderTraversal(node: TreeNode | null = this.root): void {
        if (node !== null) {
          this.preOrderTraversal(node.leftChild);
          console.log(node.value);
          this.preOrderTraversal(node.rightChild);
        }
    }

    // Depth and Height of Nodes
    public height() : number {
        return this._height(this.root);
    }
    private  _height(node : TreeNode | null) : number {
        //base condition
        if(node == null) {
            return -1;
        }

        return 1 + Math.max(this._height(node.leftChild),this._height(node.rightChild))
    }

    public isLeaf(node : TreeNode | null) : boolean {
        return node !== null && node.leftChild === null && node.rightChild === null;
    }

    // Minimum Value in a Tree

    // O(log(n))
    public min() : number {
        if( this.root == null) {
            throw new Error('nulllllllll')
        }
        let current = this.root || null;
        let last = current;
        while(current != null) {
            last = current;
            current = current.leftChild!
        }
        return last?.value
    }

    //O(n)
    public minmin() {
        if(!this.root) return null; // case tree no node
        return this._min(this.root);
    }

    private _min(node : TreeNode | null) : number  {

        if (node === null) {
            throw new Error("Node cannot be null");
        }

        if(this.isLeaf(node)) {
            return node.value; //ถ้าเป็น leaf ให้คืนค่า value ของโหนดนั้น
        }
        
        let left = node.leftChild ? this._min(node.leftChild) : Infinity; 
        let right = node.rightChild ? this._min(node.rightChild) : Infinity; 
        
        return Math.min(Math.min(left,right), node.value);
    }

    // Euqality การเปรียบเทียบต้นไม้สองต้น
    public equals(other : BinaryTree ) : boolean {

        return this._euqals(this.root , other.root)
    }

    private _euqals(first : nodeProp , second : nodeProp) : boolean {
        if(first == null && second == null) {
            return true; // ทั้งสองโหนดเป็น null แสดงว่าเท่ากัน
        }
        if(first === null || second === null) {
            return false // โหนดหนึ่งเป็น null แต่โหนดอีกอันไม่เป็น null
        }
        return (
            first.value === second.value &&
            this._euqals(first.leftChild, second.leftChild) && // เทียบซ้าย
            this._euqals(first.rightChild, second.rightChild) // เทียบขวา
        );
    }

    // Validating Binary Search Trees

    public swapRoot() {
        // algorithm swarp
        if (this.root) { 
            let temp = this.root.leftChild;
            this.root.leftChild = this.root.rightChild;
            this.root.rightChild = temp;
        }
    }

    public isBinarySearchTree() : boolean {
        return this._isBinarySearchTree(this.root,Number.MIN_VALUE,Number.MAX_VALUE)
    }
    public _isBinarySearchTree(root : rootProp , min : number , max : number) : boolean {

        if(root == null)  return true 
        if(root.value < min || root.value > max) {
            return false
        }

        return (
            this._isBinarySearchTree(root.leftChild,min,root.value - 1) &&
            this._isBinarySearchTree(root.rightChild,root.value + 1,max)
        )

    }
   

    // K Distance
    public getNodesAtDistance( distance : number) : number[] {
        let list : number [] = [] ;
        this._printNodesAtDistance(this.root,distance,list)
        return list
    }
    private _printNodesAtDistance(root : rootProp , distance : number, list : number[]) {
        if(root == null) return
        if(distance == 0) {
            list.push(root.value)
            return;
        }
        this._printNodesAtDistance(root.leftChild, distance - 1, list);
        this._printNodesAtDistance(root.rightChild, distance - 1, list);
    
    }
    
    // LevelOrder Traversal
    public traverseLevelOrder() {
        const result: number[] = []
        for (let i = 0; i <= this.height(); i++) {
            const valuesAtDistance = this.getNodesAtDistance(i); // ดึงค่าทุกโหนดที่ระดับ i
            result.push(...valuesAtDistance); // เพิ่มค่าในระดับนี้ไปยัง result
        }
        return result;
    }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(3);
tree.insert(7);
console.log("Find 7:", tree.find(7)); // Output: true
console.log("Find 15:", tree.find(15)); // Output: false
console.log('factorial ' , tree.factorial(4))
console.log("In-order Traversal:");
tree.inOrderTraversal();
// Output: 3 5 7 10 20
console.log("Pre-order Traversal:");
tree.preOrderTraversal();
// Output: 10 5 3 7 20
console.log("Post-order Traversal:");
tree.postOrderTraversal();
// Output: 3 7 5 20 10

console.log('height ' , tree.height()); 
/*       10
        /  \
        5   20
       / \    
       3  7 
*/
// node 5
// 3 = 0
// 7 = 0
// 5 = 1 + max(0,0) = 1
// node 20 = 0
// node 10
// 5 = 1
// 20 = 0
// 10 = 1 + max(1,0) = 2

console.log('minmin ' , tree.minmin()); 
console.log('min ' , tree.min()); 

const tree2 = new BinaryTree();

tree2.insert(10);
tree2.insert(5);
tree2.insert(20);
tree2.insert(3);
tree2.insert(7);
console.log('travelLevelOrder ', tree2.traverseLevelOrder())
let list = tree2.getNodesAtDistance(2);// [3,7]
/*         10  k = 0
        /    \
        5    20  k= 1
       / \     
       3  7  k=2
*/    
console.log('list ' , list);
console.log('tree2 === tree1 ? ' , tree2.equals(tree));
console.log('isBinarySeachtree ? ' , tree2.isBinarySearchTree()); // true
tree2.swapRoot()
console.log('isBinarySeachtree ? ' , tree2.isBinarySearchTree()); // false



