/*
    ---
    Functions
    ---
*/

function helloWorld() {
    console.log("Hello World!");
};

helloWorld();

function getNumber() {
    return Math.random();
};

console.log(getNumber());


function multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
}

console.log(multiplyTwoNumbers(1, 2));
console.log(multiplyTwoNumbers(2, 3));
console.log(multiplyTwoNumbers(3, 4), '\n');


// Challenge: Checkout

/*
 1. Go through the full checkout process.
 2. Use getUserCredentials provided that returns the first name, last name and concats with email.
 3. Write a function called getPreTaxTotal that take in our cartItems and returns the total without tax.
 4. Pass the preTaxTotal value to a getTaxedTotal function that returns the value with tax.
 5. Log each value from the 3 functions out.
*/


const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

function getUserCredentials(firstName, lastName, email) {
    return `${firstName} ${lastName}. Email - ${email}`;
};

function getPreTaxTotal(cartItems) {
    let totalPrice = 0;

    for (cartItem of cartItems) {
        totalPrice += cartItem.quantity * cartItem.price;
    };

    return totalPrice;
};

function getTaxedTotal(totalPrice) {
    return (totalPrice *= 1.08).toFixed(2);
};

let preTaxTotalPrice = getPreTaxTotal(cartItems);

console.log(`Customer: ${getUserCredentials("Andrew", "Beliy", "my-email@my-email.com")}`);
console.log(`Total price (before tax): ${preTaxTotalPrice}$`);
console.log(`Total price (after tax): ${getTaxedTotal(preTaxTotalPrice)}$`);
