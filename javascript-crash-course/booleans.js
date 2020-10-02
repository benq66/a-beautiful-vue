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

example1 = false;  // false
example2 = true;  // true
example3 = null;  // false
example4 = undefined;  // false
let example5 = '';  // false
let example6 = NaN;  // false
let example7 = -5;  // true
let example8 = 0;  // false

console.log(Boolean(example1));
console.log(Boolean(example2));
console.log(Boolean(example3));
console.log(Boolean(example4));
console.log(Boolean(example5));
console.log(Boolean(example6));
console.log(Boolean(example7));
console.log(Boolean(example8));