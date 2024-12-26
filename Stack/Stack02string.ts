
class StringReverser {
    
    // Reverser

    // Horn
    reverser(value : string) : string  { 
        let valuereverse = '';
        for(let i = value.length - 1; i >= 0; i--) {
            valuereverse +=  value[i];
        }
        return valuereverse
    }

/*  ข้อดี: เรียบง่ายและไม่ต้องแปลง string เป็นอาร์เรย์ จึงใช้งานได้ตรงไปตรงมา
    ประสิทธิภาพ: ทำงานเร็วกว่าเล็กน้อย เพราะไม่ต้องสร้างอาร์เรย์ใหม่
    ข้อเสีย: โค้ดอาจดูพื้นฐานกว่าสำหรับบางคนที่ชอบแนวคิดแบบ stack */

    // Mosh
    reverserMosh(value : string) : string {

        if(value == null) throw new Error('Error result null');

        let valueArr = Array.from(value);
        let reversedValue = '';

        while(valueArr.length !== 0) {
           reversedValue += valueArr.pop();
        }

        return reversedValue
    }

   /*  ข้อดี: ใช้โครงสร้างแบบ stack (pop ออกจาก array) ทำให้โค้ดดูน่าสนใจขึ้นและมีเอกลักษณ์มากขึ้น
    ประสิทธิภาพ: อาจช้ากว่าแบบ for เล็กน้อย เพราะมีการแปลง string เป็นอาร์เรย์ก่อน และ pop() ใช้เวลาเพิ่มขึ้น
    ข้อเสีย: โค้ดยาวกว่าเล็กน้อย และมีการแปลงข้อมูลก่อนใช้งาน */

   /*  ถ้าต้องการโค้ดที่กระชับและมีประสิทธิภาพสูงกว่า ใช้แบบ Horn
    ถ้าต้องการโค้ดที่ดูสร้างสรรค์และใช้โครงสร้าง stack ใช้แบบ Mosh */

    // Balanced Expression
    //นิพจน์ที่มีเครื่องหมายเปิดและปิดที่ตรงกันทั้งหมด เช่น (), {}, []

    isBalanced  (value : string) : boolean {
            // Edge cases
            // (
            // (()
            // ) (
            // (]
            // (>
            // {]
        let stack : string[] = [];

        for(let ch of value) {

            if( ch === '(' || ch === '<' || ch === '[' || ch ==='{') {
                stack.push(ch);
            }
                
            if (ch === ')' || ch === '>' || ch === ']' || ch ==='}') {
                if(stack.length === 0) return false;
                let top = stack.pop();
                if  (   (ch === ')' && top !== '(') || 
                        (ch === '>' && top !== '<') || 
                        (ch === '}' && top !== '{') || 
                        (ch === ']' && top !== '[') 
                    ) 
                return false;
            }
               
        }
        // if stack empty === balanced
        return stack.length === 0;
    }

    //ReFirstFactoring

    private isLeftBreacket(ch : string) : boolean {
        return   ch === '(' || ch === '<' || ch === '[' || ch ==='{'
    }
    private isRightBreacket(ch : string) : boolean {
        return   ch === ')' || ch === '>' || ch === ']' || ch ==='}'
    }
    private bracketsMatch(chleft : string , chright : string) : boolean { 
        return      (chright === ')' && chleft !== '(') || 
                    (chright === '>' && chleft !== '<') || 
                    (chright === '}' && chleft !== '{') || 
                    (chright === ']' && chleft !== '[') 
    }

    isBalancedReFirstFactoring(value : string) : boolean {
       
        let stack : string[] = [];

        for(let ch of value) {

            if(this.isLeftBreacket(ch)) {
                stack.push(ch);
            }
                
            if (this.isRightBreacket(ch)) {
                if(stack.length === 0) return false;
                let chleft = stack.pop() ?? '';
                if(this.bracketsMatch(chleft,ch)) return false;
            }
               
        }
        // if stack empty === balanced
        return stack.length === 0;
    }

    // ReSecondFactoring

    private isLeftBreacket2(ch : string) : boolean {
        return   "([{<".includes(ch);
    }
    private isRightBreacket2(ch : string) : boolean {
        return    ")]}>".includes(ch);
    }
    private bracketsMatch2(chleft : string , chright : string) : boolean { 
       const matches : {[key : string] : string} = {
            ')' : '(' ,']' : '[' , '{' : '}' , '<' : '>'
       }
       return matches[chright] === chleft;;
    }

    isBalancedReSecondFactoring(value: string): boolean {
        let stack: string[] = [];
    
        for (let ch of value) {
            if (this.isLeftBreacket2(ch)) {
                stack.push(ch); // เพิ่มวงเล็บเปิด
            } else if (this.isRightBreacket2(ch)) {
                // ตรวจสอบความสมดุลของวงเล็บ
                if (stack.length === 0 || !this.bracketsMatch2(stack.pop()!, ch)) {
                    return false; // วงเล็บปิดเกินหรือตรงกันไม่ถูกต้อง
                }
            }
        }
        
        // ถ้า stack ว่างแสดงว่าวงเล็บสมดุล
        return stack.length === 0;
    }
}

// Reverser
const str : string = 'EVOL';
const result  = new StringReverser();
console.log(result.reverser(str));
const str2 = 'QWER'
console.log(result.reverserMosh(str2))

// Balanced Expression

const str3 = ')1+2('; // false
const str4 = '(1+2)'; // true
const str5 = '(1+2}';// false
console.log(('Balanced Expression ' + result.isBalanced(str3)));
console.log(('Balanced Expression ' + result.isBalanced(str4)));
console.log(('Balanced Expression ' + result.isBalanced(str5)));
console.log(result.isBalanced("({[()]})")); // true
console.log(result.isBalanced("( [ ] { } )")); // true
console.log(result.isBalanced("({[})]")); // false
console.log(result.isBalancedReSecondFactoring("({[>)]")); // false
