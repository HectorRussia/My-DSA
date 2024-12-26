export class NodeLinked<T> {
     
    data : T;
    next : NodeLinked<T> | null;

    // Doubly Linked List
    prev: NodeLinked<T> | null = null;

    constructor(data : T, next : NodeLinked<T> | null = null,prev : NodeLinked<T> | null = null) {
        this.data = data;
        this.next = next;  
        this.prev = prev;
    }
}