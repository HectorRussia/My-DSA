// เปรียบเทียบ
// Recursive Approach:

// อ่านง่าย
// ใช้ cache เพื่อปรับปรุงประสิทธิภาพ.
// อาจเกิด stack overflow.
// Iterative Approach:

// ประหยัดหน่วยความจำ.
// ใช้ได้กับค่าที่ใหญ่กว่าโดยไม่มีปัญหา overflow.


// Iterative และ Recursive เป็นวิธีการแก้ปัญหาหรือการทำงานของโปรแกรมที่มีรูปแบบและการทำงานแตกต่างกัน
// แต่สามารถใช้แก้โจทย์ปัญหาหลายอย่างได้เหมือนกัน ขึ้นอยู่กับสถานการณ์และข้อจำกัดที่เราต้องการแก้ไข

// Iterative
// คือการทำงานแบบวนซ้ำ (loop) โดยใช้โครงสร้างควบคุมการทำงาน เช่น for, while, หรือ do-while เพื่อแก้ปัญหา

// ลักษณะเด่นของ Iterative
// การทำงานต่อเนื่อง: ใช้การวนลูปเพื่อแก้ปัญหา.
// ประหยัดหน่วยความจำ: ไม่ใช้ Stack Memory (ซึ่ง Recursive ใช้).
// เข้าใจง่ายในบางปัญหา: เช่น การวนลูปเพื่อแก้ปัญหาเรียงลำดับ หรือการคำนวณที่มีการทำซ้ำ.

function factorialIterative(n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialIterative(5)); // Output: 120

// Recursive
// คือการแก้ปัญหาโดยให้ฟังก์ชันเรียกใช้งานตัวเอง (self-calling function) 
// โดยต้องมีเงื่อนไขหยุดการทำงาน (base case) เพื่อหลีกเลี่ยงการวนซ้ำไม่รู้จบ

// ลักษณะเด่นของ Recursive
// การแก้ปัญหาเชิงแบ่งย่อย: เหมาะสำหรับปัญหาที่สามารถแบ่งย่อยเป็นปัญหาเล็ก ๆ ได้ เช่น 
// โครงสร้างข้อมูลแบบ Tree หรือปัญหาทางคณิตศาสตร์.
// ใช้ Stack Memory: แต่ละการเรียกฟังก์ชันจะใช้ stack frame ในหน่วยความจำ.
// อาจมีความซับซ้อน: หากไม่ระวังเรื่อง Base Case หรือปัญหาที่มีความลึกมาก.

function factorialRecursive(n: number): number {
    if (n === 0) return 1; // Base case
    return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(5)); // Output: 120

// ตัวอย่างการแก้ปัญหา Fibonacci

function fibIterative(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fibIterative(10)); // Output: 55

function fibRecursive(n: number): number {
    if (n <= 1) return n; // Base case
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}
console.log(fibRecursive(10)); // Output: 55

// สรุป
// เลือกใช้ Iterative เมื่อ:
// ต้องการประสิทธิภาพ.
// ปัญหาไม่มีโครงสร้างแบบ Tree หรือแบ่งย่อยได้ยาก.
// ใช้กับข้อมูลขนาดใหญ่และการวนซ้ำที่ลึกมาก.
// เลือกใช้ Recursive เมื่อ:
// ปัญหามีลักษณะเชิงโครงสร้าง เช่น Tree หรือ Graph.
// การเขียน Iterative ซับซ้อนเกินไป.
// ต้องการโค้ดที่สั้น กระชับ และอ่านง่าย.
// Recursive แม้ดูหรูหราในหลายปัญหา แต่การจัดการ Base Case และการใช้หน่วยความจำเป็นสิ่งสำคัญที่ต้องระวัง!