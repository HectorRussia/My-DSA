class HashDuplicate {
    hasDuplicate(nums : number[]) : boolean {
        let arrsort = nums.sort((a,b) => a - b);
        for(let i = 0; i < nums.length; i++ ) {
            for(let j = i + 1; j < nums.length; j++ ) {
                if(arrsort[i] === arrsort[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    hasDuplicateSet(nums : number[]) : boolean  {
        const seen = new Set();
        for ( let num of nums) {
            if(seen.has(num)) {
                return true;
            }
            seen.add(num)
        }
        return false;
    }
}
console.time("answer time");
console.log((new HashDuplicate).hasDuplicate([1,2,3,3]));
console.timeEnd("answer time");

console.time("answer time");
console.log((new HashDuplicate).hasDuplicateSet([1,2,3,3]));
console.timeEnd("answer time");