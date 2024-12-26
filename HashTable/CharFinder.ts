class CharFinder {

    findAllCharCounts(value : string) :  Map<string,number>  {

        const map = new Map<string,number>();

        // // นับจำนวนครั้งที่ตัวอักษรปรากฏในสตริง
        for (let ch of value) {
            // map.get(ch)! protect undefined
            const count  = map.has(ch) ? map.get(ch)! : 0;
            map.set(ch, count + 1);
        }
        return map 
   
    }
    findFirstNonRepeartingChar(value: string): string | null {
        const map = new Map<string, number>();

        for (const ch of value) {
            const count = map.has(ch) ? map.get(ch)! : 0;
            map.set(ch, count + 1);
        }
    
        // ค้นหาตัวอักษรตัวแรกที่ไม่ซ้ำ
        for (const ch of value) {
            if (map.get(ch) === 1) {
                return ch;
            }
        }
        return null;
    }

}

// super popular interview question is finding the first non repeated character in a string

// a green apple
// a = 2
// p = 2
// g = 1

const exxample = new CharFinder(); 
console.log(exxample.findAllCharCounts('a green apple')); 
console.log(exxample.findFirstNonRepeartingChar('a green apple')); // g
console.log(exxample.findFirstNonRepeartingChar('a green applegg')); // r
console.log(exxample.findFirstNonRepeartingChar('a green applegr')); // n