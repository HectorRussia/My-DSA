import { NodeLinked } from "./indexnode";

class CircularLinkedList<T> {

    private head: NodeLinked<T> | null = null;
    private tail: NodeLinked<T> | null = null;

    // เพิ่มโหนดที่ท้ายลิสต์
    addToEnd(data: T): void {
        
        const newNode = new NodeLinked(data);

        if (!this.head) {  // ถ้าลิสต์ว่าง
            this.head = newNode;
            newNode.next = this.head;  // ชี้กลับไปที่ตัวเองเพื่อสร้างวงกลม
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;  // โหนดท้ายเดิมชี้ไปที่โหนดใหม่
                newNode.next = this.head;  // โหนดใหม่ชี้กลับไปที่ head
                this.tail = newNode;       // อัปเดต tail ให้เป็นโหนดใหม่
            }
        }
    }

    // การแสดงผลจากหัวลิสต์
    display(): void {
        if (!this.head) return;

        let current = this.head;
        do {
            console.log(current.data);
            current = current.next!;
        } while (current !== this.head);  // วนกลับมาที่ head เมื่อถึงจุดสิ้นสุด
    }

    // ลบโหนดที่มีค่าตรงกับที่ระบุ
    remove(data: T): void {
        if (!this.head) return;

        let current = this.head;
        let previous: NodeLinked<T> | null = null;

        do {
            if (current.data === data) {
                if (previous) {
                    previous.next = current.next;  // ข้ามโหนดที่จะลบ
                } else {
                    // กรณีลบ head ต้องจัดการให้ tail ชี้ไปยัง head ใหม่
                    if (this.tail) {
                        this.tail.next = current.next;
                    }
                    this.head = current.next;  // อัปเดต head เป็นโหนดถัดไป
                }
                if (current === this.tail) {  // ถ้าลบ tail
                    this.tail = previous;  // tail กลายเป็นโหนดก่อนหน้า
                }
                return;
            }
            previous = current;
            current = current.next!;
        } while (current !== this.head);
    }
}

// ทดสอบการทำงานของ CircularLinkedList
const list = new CircularLinkedList<number>();
list.addToEnd(10);
list.addToEnd(20);
list.addToEnd(30);

list.display();  // แสดงผล 10, 20, 30

list.remove(20);  // ลบโหนดที่มีค่า 20
list.display();  // แสดงผล 10, 30
