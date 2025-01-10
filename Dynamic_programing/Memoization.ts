
// Memoization คือเทคนิคการเพิ่มประสิทธิภาพของฟังก์ชันโดย
// การเก็บผลลัพธ์ของการคำนวณที่เกิดขึ้นแล้วในหน่วยความจำ (cache) 
// และนำผลลัพธ์นั้นมาใช้ซ้ำ หากมีการเรียกฟังก์ชันด้วยพารามิเตอร์เดิม จะช่วยลดเวลาในการคำนวณซ้ำ ๆ 
// ได้มาก โดยเฉพาะในฟังก์ชันที่ทำงานแบบ recursive
// ฟังก์ชัน Fibonacci ปกติจะคำนวณตัวเลขซ้ำหลายครั้ง ทำให้ทำงานช้าในกรณีข้อมูลลึก (n ใหญ่)
function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); // 55
console.log(fib(40)); // ใช้เวลานานมาก

// ปัญหา:
// ในตัวอย่างนี้ หาก fib(10) เรียก fib(9) และ fib(8) 
// ฟังก์ชันทั้งสองจะเรียกซ้ำไปเรื่อย ๆ ทำให้เกิดการคำนวณตัวเลขเดิมหลายครั้ง

// ตัวอย่าง: Fibonacci (ใช้ Memoization)
// แก้ไขปัญหาด้วยการใช้ Memoization เก็บผลลัพธ์ที่คำนวณแล้ว

const cache: { [key: number]: number } = {}; // สร้าง cache

function fibMemoized(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    // ตรวจสอบว่าค่าคำนวณนี้อยู่ใน cache หรือยัง
    if (n in cache) {
        return cache[n];
    }

    // คำนวณและเก็บค่าไว้ใน cache
    cache[n] = fibMemoized(n - 1) + fibMemoized(n - 2);
    return cache[n];
}

console.log(fibMemoized(10)); // 55
console.log(fibMemoized(40)); // เร็วกว่าแบบไม่มี Memoization

// ตัวอย่าง: การใช้งาน Memoization กับ Maze Problem

const maze = [
    [1, 3, 1, 4],
    [2, 1, 8, 2],
    [4, 3, 2, 1],
    [5, 1, 2, 3],
];

//const cache: { [key: string]: number } = {}; // ใช้ Memoization

function mazereDynamic(x: number, y: number): number {
    if (x < 0 || y < 0 || x >= maze[0].length || y >= maze.length) return 0;

    const key = `${x},${y}`; // สร้าง key สำหรับตำแหน่ง (x, y)
    if (key in cache) {
        return cache[key];
    }

    if (x === 0 && y === 0) {
        return maze[0][0];
    }

    const score_from_left = mazereDynamic(x - 1, y);
    const score_from_top = mazereDynamic(x, y - 1);
    const current_score = maze[y][x];

    const result = Math.max(score_from_left, score_from_top) + current_score;

    cache[key] = result; // เก็บผลลัพธ์ไว้ใน cache
    return result;
}

console.log(mazereDynamic(3, 3)); // ค่าคะแนนสูงสุดจากมุม (0,0) ถึง (3,3)

// ข้อดีของ Memoization
// ลดเวลาการคำนวณโดยไม่ต้องประมวลผลซ้ำ
// ใช้ได้กับปัญหาที่มีโครงสร้างแบบ overlapping subproblems เช่น Fibonacci, Pathfinding, และปัญหาใน Dynamic Programming
// ทำงานง่ายกว่าเมื่อเทียบกับ iterative solution ในบางกรณี

// ข้อเสียของ Memoization
// ใช้หน่วยความจำเพิ่มเติมสำหรับเก็บผลลัพธ์ (cache)
// หากข้อมูลมีขนาดใหญ่เกินไป เช่น การคำนวณ Fibonacci ของ n = 10^6 อาจทำให้หน่วยความจำหมด
// การออกแบบ cache ต้องเหมาะสมกับปัญหา เช่นการสร้าง key สำหรับตำแหน่งในตาราง


// การตัดสินใจเลือกใช้ Recursive หรือ Memoization ขึ้นอยู่กับธรรมชาติของปัญหาและข้อจำกัดที่ต้องคำนึงถึง 
// เช่น เวลาและหน่วยความจำ 

// เมื่อควรใช้ Recursive
// Recursive มีประโยชน์ในกรณีที่:

// โครงสร้างของปัญหา: ปัญหาสามารถแบ่งย่อยออกเป็นปัญหาเล็ก ๆ แบบเดียวกันได้ (เช่น การคำนวณ Fibonacci, Factorial, Tree Traversal)
// ไม่ต้องกังวลเรื่องเวลา: ถ้าปัญหามีข้อมูลขนาดเล็ก หรือไม่ซับซ้อน การเขียน Recursive จะช่วยให้โค้ดสั้นและเข้าใจง่าย
// ไม่ต้องการเก็บค่าผลลัพธ์ซ้ำ: หากแต่ละขั้นตอนของการคำนวณเป็นเอกลักษณ์ ไม่ซ้ำกัน เช่น Quick Sort หรือ Depth-First Search (DFS)
// โครงสร้างข้อมูลเชิงลำดับชั้น: ปัญหาที่เกี่ยวข้องกับโครงสร้างข้อมูลแบบต้นไม้ เช่น การเยี่ยมชม Node ใน Binary Tree หรือ Graph


// เมื่อควรใช้ Memoization
// Memoization เหมาะสำหรับปัญหาที่:

// มี Subproblem ซ้ำกัน: หากคำนวณซ้ำหลายครั้งด้วยพารามิเตอร์เดิม การใช้ Memoization จะช่วยลดเวลาประมวลผล 
// เช่น Fibonacci, Pathfinding, Dynamic Programming Problems
// ต้องการลดความซับซ้อนเวลา: ปัญหาที่ Recursive แบบเดิม ๆ ทำงานช้า (Time Complexity สูง)
// ต้องการคำนวณผลลัพธ์เดียวกันซ้ำ: เมื่อคำตอบจาก Subproblem สามารถเก็บและเรียกใช้ซ้ำได้
// ตัวอย่าง: Fibonacci (มี Subproblem ซ้ำ)

// const cache: { [key: number]: number } = {};
function fibMemo(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (n in cache) {
        return cache[n]; // ดึงค่าจาก cache
    }

    cache[n] = fibMemo(n - 1) + fibMemo(n - 2); // คำนวณและเก็บค่า
    return cache[n];
}
console.log(fibMemo(50)); // คำนวณได้เร็วกว่า Recursive ปกติ

// ข้อควรพิจารณา
// Recursive + Memoization (Dynamic Programming):
// ในหลายกรณี เราสามารถผสมทั้งสองเทคนิคเข้าด้วยกัน เช่น การแก้ปัญหา Pathfinding ด้วย Dynamic Programming

// Recursive Depth:
// ระวังปัญหา Stack Overflow ถ้าข้อมูลลึกมากเกินไป เช่น การคำนวณ Fibonacci ของ n=10,000 ด้วย Recursive แบบเดิม

// Iterative Approach:
// ในบางกรณี Recursive สามารถถูกแทนที่ด้วย Iterative เพื่อลดการใช้หน่วยความจำ

// สรุป
// ใช้ Recursive หากปัญหาง่าย ไม่มี Subproblem ซ้ำ หรือเกี่ยวข้องกับโครงสร้างข้อมูลที่ต้อง Traverse
// ใช้ Memoization เมื่อปัญหามี Subproblem ซ้ำและต้องการเพิ่มประสิทธิภาพการทำงาน
// เลือกเครื่องมือให้เหมาะสมกับปัญหานั้น ๆ เพื่อเพิ่มประสิทธิภาพของโปรแกรม! 