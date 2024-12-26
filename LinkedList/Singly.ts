// Part SinglyLinkedList

import { NodeLinked } from "./indexnode";


class SinglyLinkedList<T> {

    private head: NodeLinked<T> | null = null;
    private tail: NodeLinked<T> | null = null;

    initail(data : T) : void {
        const newNode = new NodeLinked(data);
        this.head = newNode;
        this.tail = newNode;
    }

    insertion(data : T) {
        const newNode = new NodeLinked(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if(this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
    }

    deletion(data : T) {

        if(!this.head) return;

        if(this.head.data === data) {
                this.head = this.head.next;
                if(!this.head) {
                    this.tail = null;
                }
            return
        }
        
        // case pass condition above

        let current = this.head;
        while(current.next && current.next.data === data) {
            current = current.next;
        }

        // if found node need delete
        if (current.next) {
            current.next = current.next.next;
            if(!current.next)  // ถ้า node ที่ถูกลบคือตัวสุดท้าย 
            {
                this.tail = current;
            }
        }
    }

    display() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const testlist = new SinglyLinkedList<number>();

testlist.initail(10);  // เริ่มต้นลิสต์ด้วยค่า 10
testlist.insertion(20);  // เพิ่มค่า 20
testlist.insertion(30);  // เพิ่มค่า 30
testlist.display();  // แสดงลิสต์ (10, 20, 30)

testlist.deletion(20);  // ลบค่า 20
testlist.display();  // แสดงลิสต์หลังลบ (10, 30)

