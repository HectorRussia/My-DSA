class HashTable {
    private buckets: Array<Array<{ key: number, value: string }>>;
    private size: number;

    constructor(size: number = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    // Hash function
    private hash(key: number): number {
        return key % this.size;
    }

    // Put a key-value pair into the hash table
    public put(key: number, value: string): void {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        // Check if the key already exists and update the value
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value;
                return;
            }
        }

        // If the key doesn't exist, add a new key-value pair
        bucket.push({ key, value });
    }

    // Get the value by key
    public get(key: number): string | null {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if(bucket !== null) {
            for (const entry of bucket) {
                if (entry.key === key) {
                    return entry.value;
                }
            }
        }
      
        return null; // Return null if the key is not found
    }

    // Remove a key-value pair by key
    public remove(key: number): boolean {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1); // Remove the entry from the bucket
                return true; // Indicate successful removal
            }
        }

        return false; // Indicate that the key was not found
    }
}

// Interview I want you to implement a hash table from scratch 
// HashTable
// put(k,v)
// get(k) : v
// remove(k)
// k : int
// v : string
// Collisions : chaining
// Example usage

const hashTable = new HashTable(5);
hashTable.put(6, "A");
hashTable.put(8, "B"); // Collision with key 1, but handled with chaining
hashTable.put(11, "C");
hashTable.put(6, "A+");
console.log(hashTable.get(6)); // Output: "A+"
console.log(hashTable.get(8)); // Output: "B"
console.log(hashTable.get(11)); // Output: "C"

hashTable.remove(60);
console.log(hashTable.get(6)); // Output: null


