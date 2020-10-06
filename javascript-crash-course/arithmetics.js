/*
    ---
    Arithmetic operations
    ---
*/

const firstNumber = 10;
const secondNumber = 5;

// console.log(firstNumber + secondNumber);
// console.log(firstNumber - secondNumber);
// console.log(firstNumber * secondNumber);
// console.log(firstNumber / secondNumber);
// console.log(firstNumber % secondNumber);


// Challenge: Checkout Order Details

/*
 1. Create 3 variables to store an item price. The last price 2 items were ordered (multiplication).
 2. Tell the user what the total price is before discount.
 3. Inform the user what the average price of items is before discount.
 4. Inform them the final price after saving 5 dollars with promo code 'I Got 5 On It'.
*/

const firstItemPrice = 10;
const secondItemPrice = 20;
const thirdItemPrice = 5;
const totalPrice = firstItemPrice + secondItemPrice + (thirdItemPrice * 2);
const numberOfItems = 4;
const discount = 5;

console.log(`Total price: ${totalPrice}`);
console.log(`Average price: ${(totalPrice / numberOfItems).toFixed(2)}`);
console.log(`Final price (after applying the promo code): ${totalPrice - discount}`);
