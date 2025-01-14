class GroupAnagram {
    
    // Time complexity: O(m∗n)
    // Space complexity : O(m)
    // m = number of string , n = length longest string
    groupAnagramHashMap(strs : string[]) : string[][] {
        
        let dictionary = new Map<string,string[]>(); // charcount to list of anagrams
       
        for (let string of strs) {
            
            const  count = new Array(26).fill(0); // a-z = 26
            
            for (let char of string) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1; // a + 1 = b -> b + 1 = c=
            }
            const key = count.join(',');
            if(!dictionary.has(key)) {
                dictionary.set(key,[])
            }
            // can use Non-null Assertion because we if at !dictionary.has(key)
            // it never be undefined 
            dictionary.get(key)!.push(string)
        }

        return [...dictionary.values()];
        //return Array.from(dictionary.values());

    }

    // Object

    groupAnagramObject(strs : string[]) : string[][] {
        
        // avoid use index signature 
        let dictionary : {[key : string] : string[]}  = {}; 
       
        for (let string of strs) {
            
            const  count = new Array(26).fill(0); // a-z = 26
            
            for (let char of string) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1; // a + 1 = b -> b + 1 = c=
            }
            const key = count.join(',');
            if(!dictionary[key]) {
                dictionary[key] = [];
            }
            dictionary[key].push(string);
        }
        return Object.values(dictionary);

    }

}
let Q1 =  ["act","pots","tops","cat","stop","hat"];
let Q2 = ["x"];
let Q3 = [""];
let Q4= ["eat","tea","tan","ate","nat","bat"]
const result = new GroupAnagram()
//console.log('Q1', result.groupAnagramHashMap(Q1))
//console.log('Q1', result.groupAnagramObject(Q1))
console.log('Q1', result.groupAnagramObject(Q4))