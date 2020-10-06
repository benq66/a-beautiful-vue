/*
    ---
    Numbers
    ---
*/

let example = 7.77;
let exampleTwo = 8;
console.log(example, exampleTwo);
console.log(typeof example, typeof exampleTwo);
console.log(parseInt(example));

let exampleNumberInString = '7.77';
console.log(parseInt(exampleNumberInString), parseFloat(exampleNumberInString));
console.log(typeof parseInt(exampleNumberInString), typeof parseFloat(exampleNumberInString));

console.log(example.toFixed(1), example.toFixed(5));


// Challenge

let example1 = parseInt("Hello 33 World 22");  // 3322  x
let example2 = parseFloat('44 Andrew 33');  // 4433.0  x
let example3 = 55.3333.toFixed(0);  // 55  v
let example4 = 200.0.toFixed(2); // 200.00  v

console.log(example1);  // type number
console.log(example2);  // type number
console.log(example3);  // type string
console.log(example4);  // type string

// parseInt() and parseFloat() only grabs the first number
// if it is the first characters in the string
// otherwise it results in null

// toFixed() results in string
