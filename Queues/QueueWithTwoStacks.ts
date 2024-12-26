class QueueWithTwoStacks {

    private stack1 : number[] = [];
    private stack2 : number[] = [];

    isEmpty() : boolean {
        return  this.stack1.length === 0 && this.stack2.length === 0
    }
      
    // O(1)
    enqueue(item : number) : number {
        return this.stack1.push(item);
    } 
   
    moveStack1toStack2(): void {
        if(this.stack2.length === 0 ) {

            // linear
            while(this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop() as number);
            }
        }
    }

    // O(n)
    dequeue()  {

        if(this.isEmpty()) {
            throw new Error('ARRAY is empty');
        }
        
        this.moveStack1toStack2();
 
        return this.stack2.pop() ;
    }

    peek() {

        if(this.isEmpty()) {
            throw new Error('ARRAY is empty');
        }

        this.moveStack1toStack2();

        return this.stack2[this.stack2.length - 1];
    }

}


const Queue = new QueueWithTwoStacks();
let first : QueueWithTwoStacks = Queue;
Queue.enqueue(10);
Queue.enqueue(20);
Queue.enqueue(30);
/* Queue.dequeue(); */
console.log('Round 1 - Stack1:', first['stack1']); // ตรวจสอบ stack1
console.log('Round 1 - Stack2:', first['stack2']); // ตรวจสอบ stack2
console.log('Queue is empty?', first.isEmpty());
console.log('Next item in queue:', first.peek());
Queue.dequeue();
Queue.dequeue();
console.log('Round 2 - Stack1:', first['stack1']); // ตรวจสอบ stack1
console.log('Round 2 - Stack2:', first['stack2']); // ตรวจสอบ stack2
console.log('Queue is empty?', first.isEmpty());
console.log('Next item in queue:', first.peek());
Queue.dequeue();
Queue.dequeue();
Queue.dequeue();
Queue.dequeue();
console.log('Round 3 - Stack1:', first['stack1']); // ตรวจสอบ stack1
console.log('Round 3 - Stack2:', first['stack2']); // ตรวจสอบ stack2
console.log('Queue is empty?', first.isEmpty());
console.log('Next item in queue:', first.peek());

// Building a queue Using a Stack Stack = FIFO (First In, First Out)

// Q = Queue , S1 = Stack1 , S2 = Stack2
// Q   [10,20,30]
// S1  [10,20,30]
// S2  [30,20,10]
// --------------
// Q   [10,20,30]
// S1  []
// S2  [30,20,10]
// --------------
// Q   [20,30]
// S1  []
// S2  [30,20]
// --------------
// Q   [30]
// S1  []
// S2  [30]
// --------------
// Q   [30,40,50]
// S1  []
// S2  [30,40,50]
// --------------
// Q   [30,40,50]
// S1  [40,50] // enqueue
// S2  [30]    // dequeue
// --------------
// Q   [40,50]
// S1  [40,50] // enqueue
// S2  []    // dequeue

/* Operation	        Queue(Q)	Stack1(S1)	Stack2(S2)	    คำอธิบาย
Initial State	        [10,20,30]	[10,20,30]	[]	            เริ่มต้นด้วยการเพิ่มข้อมูลเข้า S1
Move to S2	            [10,20,30]	[]	        [30,20,10]	    ย้ายข้อมูลทั้งหมดจาก S1 ไป S2
Dequeue (10)	        [20,30]	    []	        [30,20]	        นำ 10 ออกจาก S2 และลบออกจากคิว
Dequeue (20)	        [30]	    []	        [30]	        นำ 20 ออกจาก S2 และลบออกจากคิว
Enqueue (40, 50)	    [30,40,50]	[40,50]	    [30]	        เพิ่ม 40,50 เข้า S1
Dequeue (30)	        [40,50]	    [40,50]	    []	            นำ 30 ออกจาก S2 ซึ่งเป็นตัวสุดท้าย */