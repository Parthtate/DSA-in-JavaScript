// Set in Depth
const set = new Set();

const arr1 = [1, 2]
const arr2 = [1, 2]

set.add(arr1);
set.add(arr2); 
// Every array is different treat 
// console.log(set.size);  // same as length

// console.log(set.has([1,2]));

// but string treat different in Set() it treat same 
const str = '[1, 2]'
const str2 = '[1, 2]'

set.add(str);
set.add(str2); 
// console.log(set.size);  // same as length

// console.log(set.has('[1, 2]'));

// Behind the scean Set() wants to iterable on value, so declard [] therfore it shows as single unit.
const start = 'ax'
const newSet = new Set(start)
const newSetv2 = new Set([start])

// console.log(newSet);
// console.log(newSetv2);

let r = 1;
let c = 2;
const position = r + ',' + c
console.log(position);
console.log(typeof position); // string because when we added 'string' it change datatype in string