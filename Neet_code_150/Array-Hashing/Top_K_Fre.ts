// Top K FreQuent Elements

function TopKFrequentSorting(nums : number[] , k : number) : number[] {
    
    // Sorting
    // Time complexity O(nlogn)
    // Space complexity O(n)

    // นับความถี่ของแต่ละตัวเลข
    let freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // เปลี่ยน Map เป็นอาเรย์ของคู่ (key, value) แล้วเรียงตามความถี่
    let sorted = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);
    
    // เลือก k ตัวเลขที่มีความถี่สูงสุด
    return sorted.slice(0, k).map(item => item[0]);

   

}
class MinHeap<T extends [number, number]> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
    }

    size(): number {
        return this.heap.length;
    }

    add(val: T): void {
        this.heap.push(val);
        this.bubbleUp();
    }

    poll(): T | undefined {
        if (this.size() === 0) return undefined;
        const result = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0 && last !== undefined) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return result;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parent]) >= 0) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }

    private bubbleDown(): void {
        let index = 0;
        while (index < this.heap.length) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }
            if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    toArray(): T[] {
        return this.heap;
    }
}

// Heap
// Time complexity O(nlogk)
// Space complexity O(n + k)
// n length of array , k = number top frequent
function topKFrequentHeap(nums: number[], k : number) {
    let freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // สร้าง Min-Heap จากความถี่
    let heap = new MinHeap((a, b) => a[1] - b[1]);  // เปรียบเทียบโดยความถี่
    for (let [num, freq] of freqMap) {
        heap.add([num, freq]);
        if (heap.size() > k) heap.poll();  // เอาเฉพาะ k ตัวที่มีความถี่สูงสุด
    }

    // คืนค่า k ตัวเลขที่มีความถี่สูงสุด
    return heap.toArray().map(item => item[0] );
}

// Bucket Sort
// Time complexity O(n)
// Space complexity O(n)
function topKFrequentBucketSort(nums: number[], k: number): number[] {
    // สร้าง Map สำหรับเก็บความถี่ของแต่ละตัวเลข
    let freqMap = new Map<number, number>();

    // นับความถี่ของแต่ละตัวเลขใน nums
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // สร้าง Bucket array เพื่อเก็บตัวเลขที่มีความถี่ต่างกัน
    let buckets: number[][] = Array(nums.length + 1).fill([]).map(() => []);

    // เพิ่มตัวเลขลงใน buckets ตามความถี่
    for (let [num, freq] of freqMap) {
        buckets[freq].push(num);
    }

    // เก็บตัวเลขที่มีความถี่สูงสุด
    let result: number[] = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) return result;
        }
    }

    return result;
}


let nums = [1,2,2,3,3,3];
let k1 = 2;
// output = [1,2]

let nums2 = [7,7];
let k2 = 1;
// output = [1]