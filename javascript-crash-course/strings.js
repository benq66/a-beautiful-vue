/*
    ---
    Strings
    ---
*/

let firstName = "Andrew";
let lastName = "Beliy";
console.log(typeof firstName);

// string interpolation
console.log(`${firstName} ${lastName}`);

// string properties and methods
console.log(`${firstName} ${lastName}`.length);  // 12
console.log(` ${firstName} ${lastName} `.trim().length);  // 12
console.log(`${firstName} ${lastName}`.toUpperCase());
console.log(`${firstName} ${lastName}`.toLowerCase());
console.log(`${firstName} ${lastName}`.split(' '));
console.log(`${firstName} ${lastName}`.split(''));


// Challenge - concatenate your name and make it a single var

const fullName = `${firstName} ${lastName}`;
console.log(`My full name is ${fullName}!`);
