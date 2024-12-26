class ExerciseEz {

    firstRepeatedCharacter(value : string) : string | null {
        const set = new Set();;
        for (const ch of value) {
            if (set.has(ch)) {
                return ch;
            }
            set.add(ch);
        }
        return null;
     
    }

    versionMosh(value : string) : string | 0 {
        const set = new Set();
        for(let ch of value) {
            if(set.has(ch)) {
                return ch;
            }
            set.add(ch);
        }
        return 0;
    }

}

// First Repeated Character
// green apple
const finder = new ExerciseEz();
console.log(finder.firstRepeatedCharacter('green apple'));
console.log(finder.versionMosh('green apple'));