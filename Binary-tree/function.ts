// version function
class TreeNodeFunc {
    value: number;
    left: TreeNodeFunc | null;
    right: TreeNodeFunc | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

function insert(root: TreeNodeFunc | null, value: number): TreeNodeFunc {
    
    if (root === null) {
      return new TreeNodeFunc(value);
    }
    if (value < root.value) {
      root.left = insert(root.left, value);
    } else {
      root.right = insert(root.right, value);
    }
    return root;
}
// sort asc 
function preOrder(root: TreeNodeFunc | null): void {
    if (root !== null) {
        console.log(root.value);
        preOrder(root.left);
        preOrder(root.right);
    }
  }
function inOrder(root: TreeNodeFunc | null): void {
    if (root !== null) {
        inOrder(root.left);
        console.log(root.value);
        inOrder(root.right);
    }
  }
  function postOrder(root: TreeNodeFunc | null): void {
    if (root !== null) {
        postOrder(root.left);
        postOrder(root.right);
        console.log(root.value);
    }
  }
function search(root: TreeNodeFunc | null, value: number): boolean {
    if (root === null) {
        return false; // ไม่พบค่า
    }
    if (value === root.value) {
        return true; // พบค่า
    }
    if (value < root.value) {
        return search(root.left, value); // ค้นหาที่โหนดซ้าย
    } else {
        return search(root.right, value); // ค้นหาที่โหนดขวา
    }
}
  

let root: TreeNodeFunc | null = null;

root = insert(root, 10);
root = insert(root, 5);
root = insert(root, 15);
root = insert(root, 3);
root = insert(root, 7);

console.log("Find 7:", search(root, 7)); // Output: true
console.log("Find 20:", search(root, 20)); // Output: false

console.log("In-order Traversal:");
inOrder(root);
// Output: 3, 5, 7, 10, 15