// Part Doubly Linked Lists

import { NodeLinked } from "./indexnode";

class DoublyLinkedLists<T> {

    private head: NodeLinked<T> | null = null;
    private tail: NodeLinked<T> | null = null;

    // การเพิ่ม node ที่ท้ายลิสต์
    addToEnd(data : T) : void {
        const newNode = new NodeLinked(data);
        
        // if empty
        if(!this.head) {

            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if(this.tail) {

                this.tail.next = newNode;  // เชื่อมต่อ tail เดิมกับ node ใหม่
                newNode.prev = this.tail;  // node ใหม่เชื่อมต่อกลับไปที่ tail เดิม
                this.tail = newNode;       // อัปเดต tail เป็น node ใหม่
            }
        }
    }

     // การเพิ่ม node ที่หัวลิสต์
     addToStart(data: T): void {
        const newNode = new NodeLinked(data);

        // if empty
        if (!this.head) {  

            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            newNode.next = this.head;  // node ใหม่ชี้ไปที่ head เดิม
            this.head.prev = newNode;  // head เดิมชี้กลับไปที่ node ใหม่
            this.head = newNode;       // อัปเดต head เป็น node ใหม่
        }
    }

    // การลบ node
    remove(data: T): void {
        if (!this.head) return;  // ถ้าลิสต์ว่าง

        let current: NodeLinked<T> | null = this.head;

        while (current) {
            if (current.data === data) {  // เจอข้อมูลที่ต้องการลบ
                if (current.prev) {  // ถ้ามีโหนดก่อนหน้า
                    current.prev.next = current.next;  // เชื่อมโหนดก่อนหน้ากับโหนดถัดไป
                } else {  // ถ้ากำลังลบ head
                    this.head = current.next;  // ให้ head เป็นโหนดถัดไป
                }

                if (current.next) {  // ถ้ามีโหนดถัดไป
                    current.next.prev = current.prev;  // เชื่อมโหนดถัดไปกับโหนดก่อนหน้า
                } else {  // ถ้ากำลังลบ tail
                    this.tail = current.prev;  // ให้ tail เป็นโหนดก่อนหน้า
                }

                return;
            }
            current = current.next;  // ไปที่โหนดถัดไป
        }
    }

    // การแสดงผลลิสต์จากหัวถึงท้าย
    displayFromHead(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);  // แสดงข้อมูลของโหนด
            current = current.next;     // ไปที่โหนดถัดไป
        }
    }

    // การแสดงผลลิสต์จากท้ายถึงหัว
    displayFromTail(): void {
        let current = this.tail;
        while (current) {
            console.log(current.data);  // แสดงข้อมูลของโหนด
            current = current.prev;     // ไปที่โหนดก่อนหน้า
        }
    }
}

// ทดสอบการทำงานของ DoublyLinkedList
const result = new DoublyLinkedLists<number>();

result.addToEnd(10);  // เพิ่มที่ท้ายลิสต์
result.addToEnd(20);
result.addToStart(5);  // เพิ่มที่หัวลิสต์
console.log('---------------111111111111----------------')
result.displayFromHead();  // แสดงผลจากหัว (5, 10, 20)
result.displayFromTail();  // แสดงผลจากท้าย (20, 10, 5)
console.log('---------------222222222222----------------')
result.remove(10);  // ลบค่า 10
result.displayFromHead();  // แสดงผลหลังลบ (5, 20)