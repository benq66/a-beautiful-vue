/*
    ---
    If, Else If, Else, And & Or
    ---
*/

let totalAMount = 0;

for (let i = 0; i < 5; i++) {
    console.log(i);
    totalAMount += i;
    console.log(totalAMount);
};

console.log();

let arrayOfNumbers = [1, 2, 3, 4, 5];

for (let i = 0; i < arrayOfNumbers.length; i++) {
    totalAMount += arrayOfNumbers[i];
    console.log(totalAMount);
};


// Challenge: Total Price

/*
 1. Give our customer their total price.
 2. Add the price of the items together with a sales tax of 8%.
 3. Log the price.
*/

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

let totalPrice = 0;
let totalPrice2 = 0;

for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].quantity * cartItems[i].price * 1.08;
};

for (const cartItem of cartItems) {
    totalPrice2 += cartItem.quantity * cartItem.price * 1.08;
}

console.log(totalPrice, totalPrice2);
