// O(n)
for(let i = 0; i < 10; i++) {
    console.log(i);    
}

// O(2n)
for(let i = 0; i < 10; i++) {
    console.log(i);    
}
for(let i = 0; i < 10; i++) {
    console.log(i);    
}

// O(1 + n + 1) = O(2+n)
console.log();
for(let i = 0; i < 10; i++) {
    console.log(i);    
}
console.log();


// O(n^2) or O(2n)
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(j);    
    }    
}

// O(n + (n * 2))
for(let i = 0; i < 10; i++) {
    console.log(i);    
}
for(let j = 0; j < 10; j++) {
    for(let k = 0; k < 10; k++) {
        console.log(k);    
    }    
}

// O(n!) 
function factorai(num: number):number  {
    if(num === 1 || num === 0) {
        return 1
    }
    return num * factorai(num - 1);
}

console.log(factorai(5));

//  O(log n)
function binarySearch(arr: number[], target: number): number | null {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  // เจอค่าเป้าหมาย
        } else if (arr[mid] < target) {
            left = mid + 1;  // มองหาค่าทางด้านขวา
        } else {
            right = mid - 1;  // มองหาค่าทางด้านซ้าย
        }
    }

    return null;  // ไม่เจอค่าเป้าหมาย
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;
const result = binarySearch(arr, target);

console.log(result);  // Output จะเป็น 3 ซึ่งเป็นดัชนีของค่า 7 ในอาร์เรย์

// nlogn = linear + logarithmic 

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

const arr2 = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);

console.log(sortedArr);  // Output จะเป็น [3, 9, 10, 27, 38, 43, 82]
