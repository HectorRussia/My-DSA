// การที่ recursive ไม่เวิร์กในกรณีที่ข้อมูลยิ่งลึก หรือ stack overflow เกิดขึ้นนั้น 
// มีสาเหตุหลักจาก โครงสร้างการทำงานของ recursive function 
// และข้อจำกัดของระบบปฏิบัติการหรือภาษาโปรแกรม เช่น:

// 1. Stack Memory จำกัด
// ทุกครั้งที่เรียกฟังก์ชัน (รวมถึง recursive function) ระบบจะสร้าง "stack frame" 
// ซึ่งเป็นพื้นที่ในหน่วยความจำสำหรับเก็บ

// พารามิเตอร์ของฟังก์ชัน
// ค่าตัวแปรภายในฟังก์ชัน
// ตำแหน่งการคืนค่าหลังจากฟังก์ชันสิ้นสุด
// เมื่อ recursive เรียกตัวเองไปเรื่อย ๆ โดยไม่มีจุดสิ้นสุด หรือจำนวนชั้นการเรียกซ้ำ (depth) สูงเกินไป 
// stack memory ก็จะเต็ม ส่งผลให้เกิด stack overflow error เพราะระบบไม่สามารถสร้าง stack frame เพิ่มได้อีกแล้ว

// 2. การคำนวณที่ไม่มีจุดสิ้นสุด (Base Case ไม่ชัดเจน)
// Recursive function จำเป็นต้องมี base case ซึ่งเป็นเงื่อนไขที่หยุดการเรียกซ้ำ
// เช่น if (n === 0) return 1; // base case
// หากไม่มี base case หรือ base case เขียนผิดพลาด ฟังก์ชันจะเรียกตัวเองไม่สิ้นสุด 
// ทำให้ stack memory ถูกใช้งานจนเต็ม

// 3. จำนวนชั้นของ recursive มากเกินไป

function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(50));
// กรณีนี้จำนวนครั้งที่เรียกซ้ำจะเพิ่มขึ้นแบบ Exponential (2^n) ทำให้ stack เต็มเร็วกว่าที่คิด

// ตัวอย่าง Stack Overflow

function infiniteRecursion() {
    console.log("Recursing...");
    infiniteRecursion(); // ไม่มี base case -> Stack Overflow
}

infiniteRecursion();


// วิธีแก้ปัญหา Recursive ลึกเกินไป
// ใช้ Iterative แทน Recursive

// Iterative ไม่ใช้ stack memory เหมือน recursive ทำให้จัดการปัญหาได้ในหน่วยความจำจำกัด

function factorialIterative(n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 2 ใช้ Tail Recursion (ภาษาเช่น Scala หรือ Elixir รองรับ)

// 3 Tail recursion เป็น recursive ที่ stack frame ของการเรียกครั้งก่อนหน้าถูกปลดออกทันที 
// ช่วยลดการใช้งาน stack memory
// ใช้ Memoization หรือ Dynamic Programming

// เก็บผลลัพธ์ที่คำนวณแล้วเพื่อลดการเรียกซ้ำ

const cacheMemo: { [key: number]: number } = {};
function fibMemoized(n: number): number {
    if (n in cacheMemo) return cacheMemo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    cacheMemo[n] = fibMemoized(n - 1) + fibMemoized(n - 2);
    return cacheMemo[n];
}

// 4 เพิ่ม Stack Size (ในบางภาษา)

// เช่นใน Node.js สามารถเพิ่ม stack size ได้ด้วยการตั้งค่า --stack-size

// node --stack-size=10000 yourScript.js
