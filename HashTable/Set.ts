class HastSet {
    // Map : k -> v
    // Sets: k ( not duplicate keys )
    // [1,2,3,3,2,1,4,5]

    setByMe(value: number[]) : number[] { 
        const set = new Set(value);
        return Array.from(set);
    }
}

const hs = new HastSet();
console.log(hs.setByMe([1,2,3,3,2,1,4,5])); // [1, 2, 3, 4, 5]