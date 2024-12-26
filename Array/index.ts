class ArrayMosh<T> {

    private newArray : T[] = [];

    constructor(public items : T[]) {
        this.items = items;
    }

    checkEmptyArr() {
        if (this.items.length === 0) return null; // กรณีอาร์เรย์ว่าง
    }

    checkindex(index : number) {
        if (index < 0 || index >= this.items.length) {
            throw new Error("Index out of range");
        }
    }
    
    insert(item : T) : T[] {
        this.newArray = [];
        for(let i = 0; i < this.items.length; i++) {
            this.newArray[i] = this.items[i];
        }

        this.newArray[this.newArray.length] = item;

        this.items = this.newArray;

        return this.items;

         /* this.items.push(item);
        return this.items; */
    }
    removeAt(index : number) : T[] | undefined {
        
        this.newArray  = [];
        /* let newIndex : number = 0; */
        
        this.checkindex(index);

        for(let i = 0; i < this.items.length; i++) {
            if( i < index) {
                this.newArray[i] = this.items[i];
            }
            else if (i > index) {
                this.newArray[i - 1] = this.items[i];
            }
            // protect case  [ 10, <1 empty item>, 30 ]

           /*  or if( i !== index) {
                newArray[newIndex] = this.items[i];
                newIndex++;
            } */
        }

        this.items = this.newArray;
        return this.items;

        /*  // ใช้ splice เพื่อลบสมาชิกที่ตำแหน่งที่ระบุ
         this.items.splice(index, 1);

         // คืนค่าอาเรย์ที่อัปเดต
         return this.items; */
    }
 
    indexOf(index : number ) : T | undefined {
        this.checkindex(index);
        for(let i = 0; i < this.items.length; i ++) {
            if(i === index) {
               return  this.items[i];
            }
        }
        return undefined;
    }

    print() : void {
        console.log(this.items);
    }

    max() : number | null {

        this.checkEmptyArr();

        let Numberarr = this.items.map(Number);
        let max = Numberarr[0];
        for(let i = 0; i < Numberarr.length; i++ ) {
            if( Numberarr[i] > max) {
                 max = Numberarr[i];
            }
        }   

        return max;
    }

    min() : number | null {

        this.checkEmptyArr();

        let Numberarr = this.items.map(Number);
        let min = Numberarr[0];
        for(let i = 0; i < Numberarr.length; i++ ) {
            if( Numberarr[i] < min) {
                min = Numberarr[i];
            }
        }   
        return min;
    }

    // intersect(10)
    intersect(item : number) : number | string | null {

        this.checkEmptyArr();
        let count : number = 0;
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i] === item) {
                count ++;
            }
        }
        if(count === 1) {
            return 'norepeat';
        }
        else if(count > 0) {
            console.log(count);
            return count;
        }
        else {
            return null;
        }
    }

    Maxintersect(item : number) : number {
        return 0;
    }

    reverse() {
        this.checkEmptyArr();
        this.items.sort();

        for(let i = 0 ; i < this.items.length ; i ++ ) {
            for(let j = this.items.length ; j > 0 ; j--) {
                this.items[j] = this.items[i];
            }
        }
        return this.items; 
    }

    insertAt(item: T , index: number) : T[] {
        return [];
    }
}

const TestArray = new ArrayMosh<number>([]);
// inclass TestArray === this.items
TestArray.insert(20);
TestArray.insert(10);
TestArray.insert(30);
TestArray.insert(40);
TestArray.insert(10);
TestArray.insert(10);
TestArray.insert(20);
TestArray.print();
console.log('reverse ', TestArray.reverse());
console.log(`repeat ` ,TestArray.intersect(10)); //  2 
console.log("MAX " , TestArray.max());
console.log("MIN " , TestArray.min());
console.log(TestArray.indexOf(0));
console.log(TestArray.indexOf(1));
console.log(TestArray.indexOf(2));
/* console.log(TestArray.indexOf(3)); */
TestArray.removeAt(2);
TestArray.print();