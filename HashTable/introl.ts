// Key : Employee Number (Integer)
// Value : Name (String)

interface EmployeeProp {
    id : number;
    name : string;
}

const map : EmployeeProp[] = [{
    id: 100,
    name: 'John Doe',
},{
    id: 101,
    name: 'Jane Doe',
},{
    id: 102,
    name: 'Mark Doe',
}]

console.log(map[0]);
console.log(map[1]);
console.log(map[2]);
console.log('-------------------------');

for ( let key in map) {
    console.log(map[key]);
    console.log('-------------------------');
    console.log(key);
}


