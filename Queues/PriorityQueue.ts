class PriorityQueue {
    // data structure below can Priority same
    // Arrays && Heap

    public items : number[];
    public count : number = 0;

    constructor(size: number) {
        this.items = new Array(size);
    } 

    add(item : number) : void {

        if(this.isFull()) {
            throw new Error('Arrays in bounded');
        }

        let i = this.shifItemsToInsert(item);

        this.items[i + 1] = item;
        this.count++;
    }

    shifItemsToInsert(item : number) : number {

        let i : number;
        // this.count - 1 = last index
        for(i = this.count - 1; i >= 0; i-- ) {
            if(this.items[i] > item) {
                // algorithm shifting
                this.items[ i + 1 ] = this.items[i];
            }
            else {
                break;
            }
        }
        return i;
    }

    remove() : number {

        if(this.isEmpty()) {
            throw new Error('Arrays in bounded');
        }

        return this.items[--this.count]
    }

    isEmpty() : boolean {
        return this.count == 0;
    }

    isFull() : boolean {
        console.log('Count ' + this.count);
        console.log('items.length ' +this.items.length);
        return this.count === this.items.length;
    }
}

const queue = new PriorityQueue(5);
queue.add(5);
queue.add(3);
queue.add(6);
queue.add(1);
queue.add(4);
console.log(queue.items);
console.log(queue.items.toString());
while(!queue.isEmpty()) {
    console.log(queue.remove());
}
// [1,3,5,7]
// insert(2)
// [1,2,3,5,7]
// focus the algorithm for shifting items
//        [1,3,5,7] -> [1,2,3,5,7]
// index   0 1 2 3  -> items[i + 1] = items[i]

/* whenever you have comments like this in your code 
that means your code is not explanatory  */