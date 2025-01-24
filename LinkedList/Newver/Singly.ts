class NodeLinkList {

    value : number
    next : NodeLinkList  | null;
  
    constructor(value: number, next: NodeLinkList | null = null) {
        this.value = value;
        this.next = next;
    }
  }
class SingleList  {
  
    Head: NodeLinkList | null;
    Tail: NodeLinkList | null;
    size : number
  
  
    constructor() {
          this.Head = null;
          this.Tail = null;
          this.size = 0;
    }
  
    sizeList() : number {
      return this.size
    }
  
    insertFirst(value : number)  : void {
      
      const newNode = new NodeLinkList(value, this.Head);
     
      newNode.next = this.Head;
      this.Head = newNode;

      if(this.Tail == null) {
        this.Tail = this.Head;
      }
  
      this.size++;
    }
  
    insertLast(value : number) : void {
        
        if (this.Tail == null) {
          this.insertFirst(value)
          return
        }
  
        const newNode = new NodeLinkList(value);
        this.Tail.next = newNode; 
        this.Tail = newNode;
        this.size ++;
    }
  
    
    insert(value : number , index : number) : void {
      
        if(index == 0) {
            this.insertFirst(value)
        }
        if(index == this.size) {
            this.insertLast(value)
        }
        
        let temp : NodeLinkList | null = this.Head;
        for(let i = 1; i < index; i++) {
            if(temp) {
                temp = temp.next
            }
        }

        const newNode = new NodeLinkList(value,temp!.next)
        temp!.next = newNode

        this.size++
    }

    get(index : number) {
        let node : NodeLinkList | null = this.Head;
        for(let i = 0; i< index; i++) {
            node = node!.next
        }
        return node 
    }

    public deleteFirst() : number {
        let value : number = this.Head!.value;
        this.Head = this.Head!.next;
        if(this.Head == null) {
            this.Tail = null;
        }
        this.size --;
        return value
    }

    deleteLast() : number {
        if(this.size <=1) {
            return this.deleteFirst();
        }
        let secondLast : NodeLinkList | null = this.get(this.size - 2);
        let value : number = this.Tail!.value;
        this.Tail = secondLast;
        this.Tail!.next = null;
        this.size--;
        return value
    }

    deleteAtIndex(index : number) {
        if (index == 0) {
            return this.deleteFirst();
        }
        if (index == this.size - 1) {
            return this.deleteLast();
        }

        let prev : NodeLinkList = this.get(index - 1)!;
        let value : number = prev.next!.value;

        prev.next = prev.next!.next;
        this.size--;
        return value;
    }

    find(value : number) : NodeLinkList | null {
        let node : NodeLinkList = this.Head!;
        while (node != null) {
            if (node.value == value) {
                return node;
            }
            node = node.next!;
        }
        return null;
    }


    display() : void {
      let temp : NodeLinkList | null = this.Head;
      while(temp) {
        //console.log(temp.value + " --> ");
        process.stdout.write(`${temp.value} --> `);
        temp = temp.next;
      }
      console.log('Display the end')
    }

  }
  
  const list = new SingleList();
  
  list.insertFirst(3);
  list.insertFirst(2);
  list.insertFirst(8);
  list.insertFirst(17);
  list.insertLast(99);
  list.insert(80,3);
  list.deleteLast();
  list.display();
  console.log("sizeList: ", list.sizeList());