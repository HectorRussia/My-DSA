// DLC Knowledge

const Matrix = Array.from({length : 10},() => Array.from({length:20},() => (Math.random() * 10).toFixed(0)));
//console.log(Matrix);

// bitwise complement ~~
// tranform number everting to be 32 bit integer and swap 0 be 1 , 1 be 0
// ~~ มีความสามารถในการตัดทศนิยม

const Matrixbit = Array.from({length : 10},() => Array.from({length:20},() => ~~(Math.random() * 10)));
//console.log(Matrixbit);

const maze = [
    [
      4, 5, 5, 4, 2, 5, 7,
      4, 2, 7, 2, 0, 5, 1,
      4, 0, 5, 4, 2, 9
    ],
    [
      9, 4, 0, 2, 4, 6, 9,
      8, 1, 3, 4, 8, 3, 9,
      0, 6, 1, 6, 1, 0
    ],
    [
      9, 2, 9, 6, 2, 1, 3,
      8, 0, 6, 9, 1, 6, 8,
      7, 5, 5, 0, 4, 5
    ],
    [
      9, 4, 5, 6, 2, 4, 6,
      3, 8, 5, 4, 6, 7, 1,
      3, 3, 4, 4, 1, 3
    ],
    [
      1, 4, 4, 4, 9, 1, 0,
      1, 5, 3, 3, 9, 2, 3,
      4, 6, 9, 6, 7, 8
    ],
    [
      7, 5, 6, 0, 3, 4, 6,
      6, 7, 6, 2, 0, 5, 5,
      0, 1, 7, 5, 4, 0
    ],
    [
      2, 4, 8, 2, 2, 4, 3,
      7, 4, 0, 4, 2, 1, 3,
      4, 0, 7, 3, 2, 6
    ],
    [
      2, 7, 5, 7, 7, 3, 5,
      7, 6, 3, 3, 3, 6, 7,
      3, 1, 8, 0, 2, 2
    ],
    [
      0, 9, 6, 7, 8, 3, 2,
      7, 4, 7, 2, 7, 9, 8,
      6, 0, 3, 0, 6, 8
    ],
    [
      6, 4, 2, 6, 4, 0, 8,
      9, 8, 0, 0, 4, 0, 5,
      7, 5, 6, 4, 0, 5
    ]
  ];

function mazerecursive (x : number , y : number) : number {
    // if (x < 0) return 0;
    // if (y < 0) return 0;
    // if(x >= 20) return 0;
    // if(y >= 20) return 0;

    if (x < 0 || y < 0 || x >= 20 || y >= 20) return 0;

    if (x === 0 && y === 0) {
        return maze[0][0];
    }

    const score_from_left = mazerecursive(x - 1 ,y);
    const score_from_right = mazerecursive(x, y -1);
    const score_current =  maze[y][x];
    const result = Math.max(score_from_left,score_from_right) + score_current;
    return result
}
console.time("mazerecursive");
console.log('mazerecursive' ,mazerecursive(1,1));// 17
console.timeEnd("mazerecursive"); 

// ผลลัพธ์จะเป็นการคำนวณจากการเดินทางจาก (0, 0) ไปยัง (4, 4) 
// โดยเลือกทางที่ได้คะแนนสูงที่สุดในแต่ละจุด.

// make to dynamic programing
// solve recursive first! and optimized use cahce

const cache: { [key: string]: number } = {};
function mazereDynamic(x : number , y : number) : number {

    if (x < 0 || y < 0 || x >= 20 || y >= 20) return 0;

    const key = `${x},${y}`;
    if (key in cache) {
        return cache[key];
    }

    if (x === 0 && y === 0) {
       return maze[0][0]
    }

    const score_from_left = mazereDynamic(x - 1 , y);
    const score_from_right = mazereDynamic(x, y -1);
    const score_current =  maze[y][x];

    const result = Math.max(score_from_left,score_from_right) + score_current;
    cache[key] = result;
    return result;
     
}

console.time("mazereDynamic");
console.log('mazereDynamic' ,mazereDynamic(1,1));// 44
console.timeEnd("mazereDynamic"); 

// iterative 
// focus travel of arry left -> right & on -> under
// we need guarantee when calculate we should know sub problem
// not belive ? try to reverse array 
// but recursive it cal subproblem in it

function mazereDynamicIterative(x: number, y: number): number {
  if (x < 0 || y < 0 || x >= 20 || y >= 20) return 0;

  const cache: { [key: string]: number } = {};
  const stack: { x: number; y: number }[] = [];
  const visited: { [key: string]: boolean } = {};
  const resultStack: { [key: string]: number } = {};

  // Add the initial position to stack
  stack.push({ x, y });

  while (stack.length > 0) {
      const { x, y } = stack[stack.length - 1];
      const key = `${x},${y}`;

      // Check bounds
      if (x < 0 || y < 0 || x >= 20 || y >= 20) {
          resultStack[key] = 0;
          stack.pop();
          continue;
      }

      // Check if already computed
      if (cache[key] !== undefined) {
          stack.pop();
          continue;
      }

      // If at the starting point
      if (x === 0 && y === 0) {
          cache[key] = maze[0][0];
          stack.pop();
          continue;
      }

      // Ensure dependencies are computed first
      const leftKey = `${x - 1},${y}`;
      const topKey = `${x},${y - 1}`;

      if (!visited[leftKey] && x - 1 >= 0) {
          stack.push({ x: x - 1, y });
          visited[leftKey] = true;
      } else if (!visited[topKey] && y - 1 >= 0) {
          stack.push({ x, y: y - 1 });
          visited[topKey] = true;
      } else {
          const scoreFromLeft = cache[leftKey] || 0;
          const scoreFromRight = cache[topKey] || 0;
          const scoreCurrent = maze[y][x];
          const result = Math.max(scoreFromLeft, scoreFromRight) + scoreCurrent;

          cache[key] = result;
          stack.pop();
      }
  }

  return cache[`${x},${y}`];
}

console.time("mazereDynamicIterative");
console.log('mazereDynamicIterative' ,mazereDynamicIterative(1,1)); // 44
console.timeEnd("mazereDynamicIterative"); 