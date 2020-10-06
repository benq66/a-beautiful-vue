/*
    ---
    Booleans
    ---
*/

let example1 = false;
let example2 = true;
let example3 = 0;
let example4 = 1;

// console.log(Boolean(example1), Boolean(example2), Boolean(example3), Boolean(example4))


// Challenge. Try to guess the values that will be printed to the console

example1 = false;  // false  v
example2 = true;  // true  v
example3 = null;  // false  v
example4 = undefined;  // false  v
let example5 = '';  // false  v
let example6 = NaN;  // false  v
let example7 = -5;  // true  v
let example8 = 0;  // false  v

console.log(Boolean(example1));
console.log(Boolean(example2));
console.log(Boolean(example3));
console.log(Boolean(example4));
console.log(Boolean(example5));
console.log(Boolean(example6));
console.log(Boolean(example7));
console.log(Boolean(example8));