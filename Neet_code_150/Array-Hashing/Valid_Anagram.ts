// An anagram is a string that contains the exact same characters as another string, 
// but the order of the characters can be different.

class ValidAnagram {
    isAnagram( s : string , t : string ) : boolean {

        if(s.length !== t.length) {
            return false;
        }
        let map = new Map();

        for(let i = 0; i < s.length; i++) {
            if(map.has(s[i])) {
                    map.set(s[i],map.get(s[i]) + 1)
            }
            else {
                    map.set(s[i] , 1);
            }
        }
        for (let i = 0; i < t.length; i ++) {
            if(map.has(t[i])) {
                map.set(t[i],map.get(t[i]) - 1)
            }
        }
        let keys = map.keys();
        for(let key of keys) {
            if(map.get(key) !== 0) {
                return false;
            }
        }
        return true
    }
}

const results = new ValidAnagram();
console.time('End ')
console.log('result1 ' , results.isAnagram('racecar','carrace'));
console.timeEnd('End ')

console.time('End ')
console.log('result2 ' , results.isAnagram('jar','jam'));
console.timeEnd('End ')

