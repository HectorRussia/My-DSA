
// recursive normal
function fib(a : number) : number {
    if(a === 0) return 0;
    if(a === 1) return 1;
    return fib(a-1) + fib(a-2);
}
console.time("log fib");
console.log('log fib ' , fib(10));
console.timeEnd("log fib"); 


// if value = 40
// 40                          fib(40)
// 39             fib(39)                                 fib(38)
// 38     fib(38)            fib(37)               fib(37)         fib(36)
// 37  fib(37) fib(36)  fib(36) fib(35)        fib(36)fib(35)  fib(35)fib(34)
// call function multiple brute force
// what is brute force ? => check every way!
// if you want to dynamic you should write 
// func recursive simple already


// Dynamic Programing = recursive + cache
// requirement is 
// 1 we have problem recursive
// 2 subproblem an subproblem overlap each other 

const cachefib : number[] = []; //  use array be cache

function fibDynamic(a : number) : number {
    if(a === 0) return 0;
    if(a === 1) return 1;

    // if used to calculate this will return
    if(cachefib[a]) {
        return cachefib[a];
    }
    else {
        return fib(a-1) + fib(a-2);
    }
}
// disadventage : a lot memory if problem deep have chance overflow
// such recursive 10000 time , we should to tranfrom recursive to  for-loop
console.time("log fibDynamic");
console.log('log fibDynamic' , fibDynamic(10));
console.timeEnd("log fibDynamic"); 

// code recursive all can tranfrom code is not recursive
// tick
// solve problem 
// 1 make recursive
// 2 if stack overflow
// 3 we should tranform your code recvursive to code not recursive

// for loop first to recursive i think that so hard 


// เปรียบเทียบ
// Recursive Approach:

// อ่านง่าย
// ใช้ cache เพื่อปรับปรุงประสิทธิภาพ.
// อาจเกิด stack overflow.
// Iterative Approach:

// ประหยัดหน่วยความจำ.
// ใช้ได้กับค่าที่ใหญ่กว่าโดยไม่มีปัญหา overflow.