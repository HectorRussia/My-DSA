// Boyer-Moore Majority Voting Algorithm

// The Boyer-Moore voting algorithm is one of the popular optimal algorithms 
// which is used to find the majority element among the given elements 
// that have more than N/ 2 occurrences. This works perfectly fine for finding 
// the majority element which takes 2 traversals over the given elements, 
// which works in O(N) time complexity and O(1) space complexity.

// main concept
// 2 variable 1 candidate 2 count 

// core concept
// if count = 0 change candinate => current element
// if current element = candinate => count ++
//  if current element != candinate => count --

// Reason
// if have real majority element , value majority not cut out bacause > another element in array

function findMajorityElement(nums : number[]) : number {
    let candidate = 0;
    let count = 0;

    // Find candidate
    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
          candidate  = nums[i];
          
          count = 1;
        }
        else if (candidate  === nums[i]) {
         count++
        }
        else {
          count --
        }
     }

    // Confrim candidate
    let occurrence = nums.filter(num => num === candidate).length;
    if (occurrence > Math.floor(nums.length / 2)) {
        return candidate; 
    } else {
        return -1; // no majority element
    }
}

console.log(findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Output: 4
console.log(findMajorityElement([1, 2, 3, 4, 5])); // Output: -1

// Advantage
// = fast O(n)
// - less memory O(1)

// DisAdvantage
// good specific case majority only

// Set Find Majority Element 

function findMajorityWithSet(nums : number[]) : number {
    const uniqueSet = new Set(nums); // เก็บค่าที่ไม่ซ้ำ
    const majorityCount = Math.floor(nums.length / 2);

    for (let value of uniqueSet) {
        const count = nums.filter(num => num === value).length;
        if (count > majorityCount) {
            return value; 
        }
    }
    return -1; 
}

console.log(findMajorityWithSet([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Output: 4
console.log(findMajorityWithSet([1, 2, 3, 4, 5])); // Output: -1

// Disadventage
// loop again at filter ( O(n))
// total time can be O(n^2) if case array length >> and value repeat less

// Map เพื่อหา Majority Element
// in this case better Set because keep value apear together

function findMajorityWithMap(nums) {
    const countMap = new Map();
    const majorityCount = Math.floor(nums.length / 2);

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1); // Increase the number of times it appears
        if (countMap.get(num) > majorityCount) {
            return num; 
        }
    }

    return -1; // No Majority Element
}

console.log(findMajorityWithMap([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Output: 4
console.log(findMajorityWithMap([1, 2, 3, 4, 5])); // Output: -1
