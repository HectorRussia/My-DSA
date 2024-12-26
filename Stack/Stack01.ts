class WorkingStack {

    // Operations
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // count()
    // change() เปลี่ยน data ในต่ำแหน่งที่ต้องการ
    // display() แสดงผลข้อมูลทั้งหมดใน stack

    private items : number[] = [];
    private count : number = 0;

    push(item : number) : void {

       if( this.count === item ) {

            throw new Error("Stack Overflow");
       }
       this.items[this.count] = item;
       this.count++;
    }

    pop() : number {    

      if(this.count === 0) {
        throw new Error("Stack Overflow");
      }
      return this.count--;
    
    }

    peek() : number {

        if(this.count === 0) {
            throw new Error("Stack Overflow");
        }
        return this.items[this.count - 1];
    }

    isEmpty() : boolean {

        return this.count == 0;
    }

    size() : number {
        return this.items.length;
    }

}

const stack = new WorkingStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
console.log(stack.peek());
stack.size();
console.log(stack);