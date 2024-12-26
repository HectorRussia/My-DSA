const manyarr = [10,20,30,40,50,60,70,80];
console.log(manyarr[0]); // 10
console.log(manyarr[4]); // 50
console.log(manyarr[7]); // 80
console.log(manyarr[manyarr.length]); // undefined
console.log(manyarr[manyarr.length-1]); //80

manyarr[manyarr.length] = 90;
console.log(manyarr);