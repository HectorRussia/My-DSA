class TwoSumSolve {

    twoSumBruteForce(nums : number[],target:number) : number[] {
        for(let i = 0 ; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j ++) {
                if(nums[i] + nums[j]  === target) {
                    return [i,j]
                }
            }
        }

        return []
    }

    twoSumHashMapI(nums : number[],target:number) : number[] {
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if(map.has(complement)) {
                return [map.get(complement) , i];
            }

            map.set(nums[i],i);
        }
        return [];
    } 

    twoSumHashMapII(nums : number[],target:number) : number[] {
        let prevMap: Map<number, number> = new Map();
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (prevMap.has(diff)) { 
                return [prevMap.get(diff)!, i];
            }
            prevMap.set(nums[i], i);
        }
        return []; 
    }
}

const result = new TwoSumSolve();
console.time('Start ');
console.log(result.twoSumBruteForce([3,4,5,6],7));
console.timeEnd('Start ');

console.time('Start ');
console.log(result.twoSumHashMapII([3,4,5,6],7));
console.timeEnd('Start ');

console.time('Start ');
console.log(result.twoSumHashMapI([3,4,5,6],7));
console.timeEnd('Start ');