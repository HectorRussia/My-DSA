class QueueWorking {

    private items: (number | undefined)[]; // อาเรย์สำหรับเก็บข้อมูล
    private rear: number; // ตำแหน่งท้ายของคิว
    private count: number; // จำนวนข้อมูลในคิว
    private front: number; // ตำแหน่งหน้าของคิว

    constructor(capacity: number) { // ใช้ constructor แทนการประกาศ ArrayQueue
        this.items = new Array(capacity); // สร้างอาเรย์ให้มีขนาดตาม capacity
        this.rear = 0; // เริ่มต้น rear
        this.front = 0; // เริ่มต้น front
        this.count = 0; // เริ่มต้น count
    }

    // ขนาดของ queues
    isFull(): boolean {
        return (this.rear + 1) % this.items.length === this.front;
    }

    // ตรวจสอบ queue ว่าง
    isEmpty(): boolean {
        return this.rear === this.front;
    }

    // เพิ่มข้อมูลท้าย  rear
    enqueue(item : number) {
        if (this.isFull()) { // ตรวจสอบว่าคิวเต็มหรือไม่
            throw new Error('Queue is full');
        }
        this.items[this.rear] = item; 
        this.rear = (this.rear + 1) % this.items.length;
        this.count++;
    }

    // ดึงข้อมูลหน้าออก front
    dequeue() : number | undefined {
        if (this.isEmpty()) { // ตรวจสอบว่าคิวว่างหรือไม่
            throw new Error('Queue is empty');
        }
        let item =  this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.items.length;
        this.count--;
        return item;
    }   
    convertString(): number[] {
        return this.items.filter((item): item is number => item !== undefined);
    }

     // ตรวจสอบข้อมูลด้านหน้า
     peek(): number | undefined {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items[this.front]; // คืนค่าตัวแรกในคิวโดยไม่ลบออก
    }
    // Circular Arrays
   /*  สำหรับจัดการคิวที่มีขนาดจำกัด เราจะใช้หลักการ modulo 
    เพื่อให้สามารถนำค่า rear และ front 
    ของคิวกลับไปเริ่มต้นใหม่ที่ตำแหน่งแรกได้เมื่อถึงขอบเขตสูงสุดของอาเรย์ */
    ตัวอย่างกระบวนการทำงาน

    // การเพิ่มข้อมูล(rear)	    ตำแหน่งในอาเรย์	            ค่าในคิว	            คำอธิบาย
    // rear = 5	            (5) % 5 = 0	        [60,20,30,40,50]	    rear วนกลับมาเริ่มที่ 0
    // rear = 6	            (6) % 5 = 1	        [60,70,30,40,50]	    rear ชี้ไปที่ตำแหน่ง 1
    // rear = 7	            (7) % 5 = 2	        [60,70,80,40,50]	    rear ชี้ไปที่ตำแหน่ง 2
    // rear = 8	            (8) % 5 = 3	        [60,70,80,90,50]	    rear ชี้ไปที่ตำแหน่ง 3
    // rear = 9	            (9) % 5 = 4	        [60,70,80,90,100]	    rear ชี้ไปที่ตำแหน่ง 4
    // rear = 10	        (10) % 5 = 0	    [110,70,80,90,100]	    rear วนกลับมาเริ่มที่ 0
    
}

// enqueue
// dequeue
// peek
// isEmpty
// isFull

const queueNew = new QueueWorking(5);
queueNew.enqueue(10);
queueNew.enqueue(20);
queueNew.enqueue(30);
console.log('Before dequeue:', queueNew.convertString());
console.log(queueNew.dequeue());
console.log('After dequeue:', queueNew.convertString());
queueNew.enqueue(40);
console.log('enqueue(40):', queueNew.convertString());
queueNew.enqueue(50);
queueNew.enqueue(60);
queueNew.enqueue(70);
console.log(queueNew.convertString());
